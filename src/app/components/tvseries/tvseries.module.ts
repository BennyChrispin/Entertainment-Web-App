import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TvseriesComponent } from './tvseries.component';

@NgModule({
  declarations: [TvseriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TvseriesComponent }]),
  ],
})
export class TvseriesModule {}
