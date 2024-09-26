import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectBookmarkedMovies,
  selectBookmarkedTvSeries,
} from '../../store/movies/movies.selectors';
import { Movie } from '../../store/movies/movies.state';

@Component({
  selector: 'app-book-mark-list',
  templateUrl: './book-mark-list.component.html',
  styleUrls: ['./book-mark-list.component.css'],
})
export class BookMarkListComponent implements OnInit {
  bookmarkedMovies$!: Observable<Movie[]>;
  bookmarkedTvSeries$!: Observable<Movie[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.bookmarkedMovies$ = this.store.select(selectBookmarkedMovies);
    this.bookmarkedTvSeries$ = this.store.select(selectBookmarkedTvSeries);
  }
}
