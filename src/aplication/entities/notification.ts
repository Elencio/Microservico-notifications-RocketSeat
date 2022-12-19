import { Content } from './content';
import { Replace } from '@helpers/replace';
import { randomUUID } from 'crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createAt: Date;
}
export class Notification {
  
  private _id: string;
  private props: NotificationProps;


  constructor(props: Replace<NotificationProps, { createAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createAt: props.createAt ?? new Date(),
    };
  }
   
  public get id(){
    return this.id;
  }
  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }

  public set category(content: string) {
    this.props.category = this.category;
  }
  public get category(): string {
    return this.props.category;
  }

  public set readAt(content: Date | null | undefined) {
    this.props.readAt = this.readAt;
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  
  }

  public cancel(){
    this.props.canceledAt = new Date();
 }
  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }
  public get createAt(): Date {
    return this.props.createAt;
  }

  public set recipientId(content: string) {
    this.props.recipientId = this.recipientId;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }
}
