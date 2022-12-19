import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { NotificationRepository } from '../repositories/notification-repository';
import { Notification } from './../entities/notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}


interface SendNotificationResponse {
 notification : Notification;
}

@Injectable()
export class SendNotification {

  constructor (private notificationsRepository: NotificationRepository) {}

  async execute( request: SendNotificationRequest): Promise<SendNotificationResponse>{

      const { recipientId, category, content} = request

      const notification = new Notification({
        recipientId,
        content: new Content(content),
        category,
      });

      await  this.notificationsRepository.create(notification);


      return {
        notification,
      };
  }
}