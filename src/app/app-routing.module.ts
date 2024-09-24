import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './auth/login-signup/login-signup.component';

const routes: Routes = [
  { path: 'auth', component: LoginSignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./components/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'tvseries',
    loadChildren: () =>
      import('./components/tvseries/tvseries.module').then(
        (m) => m.TvseriesModule
      ),
  },
  {
    path: 'bookmarked',
    loadChildren: () =>
      import('./components/bookmarked/bookmarked.module').then(
        (m) => m.BookmarkedModule
      ),
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
