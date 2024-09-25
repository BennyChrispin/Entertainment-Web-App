import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './auth/login-signup/login-signup.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvseriesComponent } from './pages/tvseries/tvseries.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';

const routes: Routes = [
  { path: 'auth', component: LoginSignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tvseries', component: TvseriesComponent },
  { path: 'bookmarked', component: BookmarkedComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
