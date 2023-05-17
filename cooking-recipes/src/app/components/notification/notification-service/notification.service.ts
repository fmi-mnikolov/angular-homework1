import { EventEmitter, Injectable } from '@angular/core';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  updateEmitter: EventEmitter<Notification> = new EventEmitter();

  constructor() { }

  pushNotification(title: string, message: string, success: boolean) {
    let notification = {
      title: title,
      message: message,
      success: success
    } as Notification;

    this.updateEmitter.emit(notification);
  }
}
