import { Component, EventEmitter, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'cr-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass'],
})
export class LogoutComponent implements OnInit {
  @HostBinding('class') class = 'router-outlet';
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.removeUser();
    this.router.navigate(['/home']);
  }
}
