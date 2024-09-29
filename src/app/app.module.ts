import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './store/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginSignupComponent } from './auth/login-signup/login-signup.component';
import { movieReducer } from './store/movies/movies.reducer';
import { MovieEffects } from './store/movies/movies.effects';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './pages/home/home.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TrendingComponent } from './components/trending/trending.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { BookMarkListComponent } from './components/book-mark-list/book-mark-list.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginSignupComponent,
    HomeComponent,
    BookmarkedComponent,
    TrendingComponent,
    RecommendedComponent,
    BookMarkListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: movieReducer }),
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true,
    }),
    AuthModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
