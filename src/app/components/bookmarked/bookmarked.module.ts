import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkedComponent } from './bookmarked.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BookmarkedComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: BookmarkedComponent }]),
  ],
})
export class BookmarkedModule {}
