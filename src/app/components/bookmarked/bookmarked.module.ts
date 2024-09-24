import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkedComponent } from './bookmarked.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BookmarkedComponent }]),
  ],
})
export class BookmarkedModule {}
