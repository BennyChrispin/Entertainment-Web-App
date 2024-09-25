import { createAction, props } from '@ngrx/store';
import { Movie } from './movies.state';

export const loadMovies = createAction('[Movies] Load Movies');
export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: Movie[] }>()
);
export const loadMoviesFailure = createAction(
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
