import { createAction, props } from '@ngrx/store';
import { Movie } from './movies.state';

export const loadTrendMovies = createAction('[Movies] Load Movies');
export const loadTrendMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: Movie[] }>()
);
export const loadTrendMoviesFailure = createAction(
  '[Movies] Load Movies Failure',
  props<{ error: string }>()
);
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
export const bookmarkMovie = createAction(
  '[Movies] Bookmark Movie',
  props<{ id: number }>()
);
