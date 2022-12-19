import { NotificationRepository } from "src/aplication/repositories/notification-repository";
import { Notification } from "src/aplication/entities/notification";

export class inMemoryNotificationRepository implements NotificationRepository {
  async findById(notificationId: string): Promise<Notification> {
    throw new Error("Method not implemented.");
  }
  async save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public  notifications: Notification[] = [];

  async create(notification: Notification){
    this.notifications.push(notification);
  }
}
  
