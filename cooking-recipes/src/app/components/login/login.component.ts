import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserDTO } from 'src/app/models/user-dto';
import { LoginService } from 'src/app/services/login-service/login.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'cr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  @HostBinding('class') class = 'router-outlet';
  user: UserDTO = new UserDTO();
  credential: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private loginService: LoginService
  ) {}

  private verifyInput() {
    if (
      this.credential.match(
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
      )
    ) {
      this.user.username = this.credential;
    } else if (this.credential.match(/[^@\s]+@[^@\s]+\.[^@\s]+/)) {
      this.user.email = this.credential;
    }
  }

  login() {
    this.verifyInput();
    let exists: User | undefined = new User();
    this.userService.getUsers().subscribe((x) => {
      exists = x.find((y) => {
        if (this.user.email) {
          if (this.user.email == y.email && this.user.password == y.password) {
            return true;
          }
        }

        if (this.user.username) {
          if (
            this.user.username == y.username &&
            this.user.password == y.password
          ) {
            return true;
          }
        }

        return false;
      });
    });

    if (exists) {
      this.loginService.addUser(exists);
      this.user = new User();
      this.credential = '';
      this.router.navigate(['/home']);
    } else {
      console.log('User does not exist');
      return;
    }
  }
}
