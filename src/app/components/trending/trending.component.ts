import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  bookmarkMovie,
  loadTrendMovies,
  unbookmarkMovie,
} from '../../store/movies/movies.actions';
import {
  selectMovies,
  selectLoading,
  selectError,
} from '../../store/movies/movies.selectors';
import { Movie } from '../../store/movies/movies.state';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  trendingMovies$!: Observable<Movie[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTrendMovies());
    this.trendingMovies$ = this.store.select(selectMovies);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }
  bookmarkMovie(movieId: number) {
    this.store.dispatch(bookmarkMovie({ movieId }));
    console.log('This bookmark', movieId);
  }
  unbookmarkMovie(movieId: number) {
    this.store.dispatch(unbookmarkMovie({ movieId }));
    console.log('This bookmark', movieId);
  }
}
