import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvseriesComponent } from './components/tvseries/tvseries.component';
import { BookmarkedComponent } from './components/bookmarked/bookmarked.component';
import { CardComponent } from './shared/components/card/card.component';
import { CustomPipePipe } from './shared/pipes/custom-pipe.pipe';
import { AuthModule } from '../app/store/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginSignupComponent } from './auth/login-signup/login-signup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvseriesComponent,
    BookmarkedComponent,
    CardComponent,
    CustomPipePipe,
    LoginSignupComponent,
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
