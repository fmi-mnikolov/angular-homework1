import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  @HostBinding('class') class = 'router-outlet';
}
