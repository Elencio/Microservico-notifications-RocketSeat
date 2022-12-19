import { PrismaNotificationsRepository } from './prisma/repositorys/prisma-notifications-repositories';
import { NotificationRepository } from '@aplication/repositories/notification-repository';

import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

@Module({
  providers: [
    PrismaService, {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    }
  ],

  exports: [
    NotificationRepository
  ],
})

export class DataBaseModule {

}