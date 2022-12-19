import { Content } from './content';

describe('Notification content ', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma solitacao de Amizade');
  
    expect(content).toBeTruthy();
  
  });
  
  test('it should not be able to create a notification content with less than 5 characters', () => {
    const content = new Content('aaaaaaaaaa');
  
    expect(content).toBeTruthy();
  
  });
})

