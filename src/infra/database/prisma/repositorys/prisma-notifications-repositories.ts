import { PrismaNotificationMappers } from './../mappers/prisma-notification-mappers';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Notification } from 'src/aplication/entities/notification';
import { NotificationRepository } from 'src/aplication/repositories/notification-repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository  {
   constructor(private prismaService: PrismaService){}
  async findById(notificationId: string): Promise<Notification> {
    throw new Error('Method not implemented.');
  }
  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMappers.toPrisma(notification);
    
    await this.prismaService.notification.create({
        data: raw,
    })
  }

}