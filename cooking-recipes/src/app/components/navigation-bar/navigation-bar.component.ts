import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'cr-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass'],
})
export class NavigationBarComponent implements OnInit, OnChanges {
  isExpanded: boolean = false;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.isAdmin = this.isLoggedIn && this.loginService.isAdmin();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.isAdmin = this.isLoggedIn && this.loginService.isAdmin();
    }, 1000);
  }

  changeExpansion(): void {
    this.isExpanded = !this.isExpanded;
  }

  home() {
    this.router.navigate(['/home']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.router.navigate(['/logout']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  recipes() {
    this.router.navigate(['/recipes']);
  }

  adminPanel() {
    this.router.navigate(['/admin']);
  }
}
