import { NotificationViewModel } from './../view-models/notification-view-model';
import { SendNotification } from '@aplication/use-cases/send-notification';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notification')
export class NotificationsController { 
  constructor(
    private sendNotification: SendNotification
  ){}

  @Post() 
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification: NotificationViewModel.toHTTP(notification) }
  }
}
