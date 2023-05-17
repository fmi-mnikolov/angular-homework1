import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRole } from 'src/app/models/user';
import { UserService } from 'src/app/services/user-service/user.service';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LoginService } from 'src/app/services/login-service/login.service';
import { NotificationService } from '../notification/notification-service/notification.service';

@Component({
  selector: 'cr-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass'],
})
export class RegistrationComponent implements OnInit {
  @HostBinding('class') class = 'router-outlet';
  defaultImage: string =
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png';
  user: User = new User();

  constructor(
    private router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.user.role = UserRole.Cook;
  }

  getImageUrl(): string {
    return this.user.profilePicture ?? this.defaultImage;
  }

  register() {
    this.userService
      .createUser(this.user)
      .pipe(
        tap((data) => {
          this.loginService.addUser(data);
          this.user = new User();
          this.notificationService.pushNotification(
            'Registration Alert',
            'Registered successfully',
            true
          );
          this.router.navigate(['/home']);
        }),
        catchError((err) => {
          console.log('Cannot register user');
          this.notificationService.pushNotification(
            'Registration Alert',
            'Registered failed',
            false
          );
          return of();
        })
      )
      .subscribe();
  }
}
