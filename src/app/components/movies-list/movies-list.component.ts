import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  selectMovies,
  selectRecommendedMovies,
  selectLoading,
  selectError,
} from '../../store/movies/movies.selectors';
import { Movie } from '../../store/movies/movies.state';
import {
  loadTrendMovies,
  loadRecommendedMovies,
} from '../../store/movies/movies.actions';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTrendMovies());
    this.store.dispatch(loadRecommendedMovies({ movieId: 123 }));

    const trendingMovies$ = this.store.select(selectMovies);
    const recommendedMovies$ = this.store.select(selectRecommendedMovies);

    this.movies$ = combineLatest([trendingMovies$, recommendedMovies$]).pipe(
      map(([trendingMovies, recommendedMovies]) => [
        ...trendingMovies,
        ...recommendedMovies,
      ])
    );

    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }
}
