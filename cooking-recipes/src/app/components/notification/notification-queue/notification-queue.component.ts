import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Notification } from '../models/notification';
import { NotificationService } from '../notification-service/notification.service';

@Component({
  selector: 'notification-queue',
  templateUrl: './notification-queue.component.html',
  styleUrls: ['./notification-queue.component.sass'],
})
export class NotificationQueueComponent implements OnInit, OnDestroy {
  notificationQueue: Notification[] = [];
  subscription!: EventEmitter<Notification>;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationQueue = [];

    this.subscription = this.notificationService.updateEmitter;
    this.subscription.subscribe((notification) => {
      this.notificationQueue.push(notification);
      setTimeout(() => {
        this.notificationQueue.shift();
      }, 5 * 1000);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
