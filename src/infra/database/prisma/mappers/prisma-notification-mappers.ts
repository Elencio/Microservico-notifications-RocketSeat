import { Notification } from "@aplication/entities/notification";
export class PrismaNotificationMappers {

  static toPrisma(notification: Notification){

    return {
      
        id: notification.id,
        category: notification.category,
        content: notification.content.value, 
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createAt
    
    }
  }
}