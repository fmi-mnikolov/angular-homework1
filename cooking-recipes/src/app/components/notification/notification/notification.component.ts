import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../models/notification';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass'],
})
export class NotificationComponent implements OnInit {
  @Input()
  notification!: Notification;
  visible: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = false;
    }, 4.5 * 1000);
  }
}
