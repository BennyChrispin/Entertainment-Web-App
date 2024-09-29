import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MoviesComponent, MoviesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MoviesComponent }]),
    SharedModule,
  ],
})
export class MoviesModule {}
