import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './store/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { LoginSignupComponent } from './auth/login-signup/login-signup.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, LoginSignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    AuthModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
