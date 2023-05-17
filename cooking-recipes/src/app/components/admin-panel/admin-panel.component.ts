import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cr-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass'],
})
export class AdminPanelComponent {
  @HostBinding('class') class = 'router-outlet';
}
