import { Notification } from 'src/aplication/entities/notification';
import { CancelNotification } from './cancel-notification';
import { inMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { Content } from '@aplication/entities/content';


describe('Cancel Notification ', () => {
  test('it should be able to send a notification', async () => {
    const NotificationRepository = new inMemoryNotificationRepository
    const cancelnotification = new CancelNotification(NotificationRepository);
  

    const notification = new Notification({
      category: 'Social',
      content: new Content('Nova solitacao de amizade'),
      recipientId: 'example-recipient-Id',
    })

    await NotificationRepository.create(notification)

   await cancelnotification.execute({
      notificationId: notification.id,
    });
    
    expect(NotificationRepository.notifications).toHaveLength(1);
    expect(NotificationRepository.notifications[0]).toEqual(notification);
  
  });
  
})