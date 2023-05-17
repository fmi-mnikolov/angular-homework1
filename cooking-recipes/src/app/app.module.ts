import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { Router } from '@angular/router';
import { UserService } from './services/user-service/user.service';
import { RecipeService } from './services/recipe-service/recipe.service';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './services/auth-guard/authguard.guard';
import { LoginService } from './services/login-service/login.service';
import { AdminGuard } from './services/admin-guard/admin.guard';
import { RecipesComponent } from './components/recipes/recipes.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { LoginGuard } from './services/login-guard/login.guard';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeSummaryComponent } from './components/recipe-summary/recipe-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    LogoutComponent,
    RecipesComponent,
    AdminPanelComponent,
    RecipeComponent,
    RecipeSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    UserService,
    RecipeService,
    AuthGuard,
    AdminGuard,
    LoginService,
    LoginGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
