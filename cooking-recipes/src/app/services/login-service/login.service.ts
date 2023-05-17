import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  isLoggedIn() {
    if (sessionStorage.getItem('userId')) {
      return true;
    }
    return false;
  }

  isAdmin() {
    if (
      sessionStorage.getItem('role') &&
      sessionStorage.getItem('role') == '2'
    ) {
      return true;
    }
    return false;
  }

  addUser(user: User) {
    sessionStorage.clear();
    sessionStorage.setItem('userId', `${user.id}`);
    sessionStorage.setItem('username', `${user.username}`);
    sessionStorage.setItem('name', `${user.firstName} ${user.lastName}`);
    sessionStorage.setItem('role', `${user.role}`);
  }

  removeUser() {
    sessionStorage.clear();
  }
}
