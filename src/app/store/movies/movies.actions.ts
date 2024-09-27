import { createAction, props } from '@ngrx/store';
import { Movie } from './movies.state';

// Load Trending Movies
export const loadTrendMovies = createAction('[Movies] Load Movies');
export const loadTrendMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: Movie[] }>()
);
export const loadTrendMoviesFailure = createAction(
  '[Movies] Load Movies Failure',
  props<{ error: string }>()
);
// Load Recommended Movies
export const loadRecommendedMovies = createAction(
  '[Movies] Load Recommended Movies',
  props<{ movieId: number }>()
);
export const loadRecommendedMoviesSuccess = createAction(
  '[Movies] Load Recommended Movies Success',
  props<{ movies: Movie[] }>()
);

export const loadRecommendedMoviesFailure = createAction(
  '[Movies] Load Recommended Movies Failure',
  props<{ error: string }>()
);
// Load Tv Series Movies
export const loadTvSeriesMovies = createAction(
  '[Movies] Load TV Series Movies'
);

export const loadTvSeriesMoviesSuccess = createAction(
  '[Movies] Load TV Series Movies Success',
  props<{ tvSeriesMovies: Movie[] }>()
);

export const loadTvSeriesMoviesFailure = createAction(
  '[Movies] Load TV Series Movies Failure',
  props<{ error: string }>()
);

// Bookmark/Unbookmark Movies
export const bookmarkMovie = createAction(
  '[Movies] Bookmark Movie',
  props<{ movieId: number }>()
);

export const unbookmarkMovie = createAction(
  '[Movies] Unbookmark Movie',
  props<{ movieId: number }>()
);

export const bookmarkTvSeries = createAction(
  '[Movies] Bookmark TV Series',
  props<{ tvSeriesId: number }>()
);

export const unbookmarkTvSeries = createAction(
  '[Movies] Unbookmark TV Series',
  props<{ tvSeriesId: number }>()
);
