import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieState } from './movies.state';

export const selectMovieState = createFeatureSelector<MovieState>('movies');

export const selectMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.movies
);
export const selectRecommendedMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.recommendedMovies
);
export const selectTvSeriesMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.tvSeriesMovies
);
export const selectLoading = createSelector(
  selectMovieState,
  (state: MovieState) => state.loading
);
export const selectError = createSelector(
  selectMovieState,
  (state: MovieState) => state.error || ''
);
export const selectBookmarkedMovies = createSelector(
  selectMovieState,
  (state: MovieState) =>
    [...state.movies, ...state.recommendedMovies].filter(
      (movie) => movie.isBookmarked
    )
);
export const selectBookmarkedTvSeries = createSelector(
  selectMovieState,
  (state: MovieState) => state.bookmarkedTvSeries
);
