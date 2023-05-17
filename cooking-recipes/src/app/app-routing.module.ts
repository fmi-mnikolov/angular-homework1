import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './services/auth-guard/authguard.guard';
import { AdminGuard } from './services/admin-guard/admin.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { LoginGuard } from './services/login-guard/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [LoginGuard, AdminGuard],
  },
  {
    path: 'recipes/{id}',
    component: RecipesComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
