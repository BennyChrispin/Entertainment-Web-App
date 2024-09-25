import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieState } from './movies.state';

export const selectMovieState = createFeatureSelector<MovieState>('movies');

export const selectMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.movies
);

export const selectLoading = createSelector(
  selectMovieState,
  (state: MovieState) => state.loading
);

export const selectRecommendedMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.recommendedMovies
);
export const selectError = createSelector(
  selectMovieState,
  (state: MovieState) => state.error || ''
);
