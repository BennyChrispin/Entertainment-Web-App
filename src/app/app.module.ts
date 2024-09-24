import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CardComponent } from './shared/components/card/card.component';
import { CustomPipePipe } from './shared/pipes/custom-pipe.pipe';
import { AuthModule } from '../app/store/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginSignupComponent } from './auth/login-signup/login-signup.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CustomPipePipe,
    LoginSignupComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    AuthModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
