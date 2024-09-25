import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: MoviesComponent }]),
  ],
})
export class MoviesModule {}
