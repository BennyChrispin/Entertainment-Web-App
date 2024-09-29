import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvseriesComponent } from './tvseries.component';
import { RouterModule } from '@angular/router';
import { TvSerieListComponent } from '../../components/tv-serie-list/tv-serie-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TvseriesComponent, TvSerieListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TvseriesComponent }]),
    SharedModule,
  ],
})
export class TvseriesModule {}
