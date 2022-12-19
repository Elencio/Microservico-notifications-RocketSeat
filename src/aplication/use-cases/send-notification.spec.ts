import { inMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send Notification ', () => {
  test('it should be able to send a notification', async () => {
    const NotificationRepository = new inMemoryNotificationRepository
    const sendNotification = new SendNotification(NotificationRepository);
  
     const { notification } = await sendNotification.execute({
      category: 'important!!',
      content: 'This is your oportunity',
      recipientId: 'example-recipient-Id'


    })
    
    expect(NotificationRepository.notifications).toHaveLength(1);
    expect(NotificationRepository.notifications[0]).toEqual(notification);
  
  });
  
})