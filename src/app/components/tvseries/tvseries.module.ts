import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TvseriesComponent } from './tvseries.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TvseriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TvseriesComponent }]),
    SharedModule,
  ],
})
export class TvseriesModule {}
