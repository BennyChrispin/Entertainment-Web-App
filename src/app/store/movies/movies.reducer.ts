import { Action, createReducer, on } from '@ngrx/store';
import { MovieState, initialMovieState } from './movies.state';
import * as MovieActions from './movies.actions';
import {
  bookmarkMovie,
  loadTvSeriesMovies,
  loadTvSeriesMoviesFailure,
  loadTvSeriesMoviesSuccess,
  unbookmarkMovie,
} from './movies.actions';

export function reducer(state: MovieState | undefined, action: Action) {
  return movieReducer(state, action);
}

export const movieReducer = createReducer(
  initialMovieState,
  on(MovieActions.loadTrendMovies, (state) => ({ ...state, loading: true })),
  on(MovieActions.loadTrendMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies,
    loading: false,
  })),
  on(MovieActions.loadTrendMoviesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(MovieActions.loadRecommendedMovies, (state) => ({
    ...state,
    loading: true,
  })),
  on(MovieActions.loadRecommendedMoviesSuccess, (state, { movies }) => ({
    ...state,
    loading: false,
    recommendedMovies: movies,
  })),
  on(MovieActions.loadRecommendedMoviesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(loadTvSeriesMovies, (state) => ({ ...state, loading: true })),
  on(loadTvSeriesMoviesSuccess, (state, { tvSeriesMovies }) => ({
    ...state,
    loading: false,
    tvSeriesMovies,
  })),
  on(loadTvSeriesMoviesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(bookmarkMovie, (state, { movieId }) => {
    const updatedMovies = state.movies.map((movie) =>
      movie.id === movieId ? { ...movie, isBookmarked: true } : movie
    );

    const updatedRecommendedMovies = state.recommendedMovies.map((movie) =>
      movie.id === movieId ? { ...movie, isBookmarked: true } : movie
    );

    const bookmarkedMovies = [
      ...updatedMovies.filter((movie) => movie.isBookmarked),
      ...updatedRecommendedMovies.filter((movie) => movie.isBookmarked),
    ];

    localStorage.setItem(
      'bookmarkedMoviesAndSeries',
      JSON.stringify(bookmarkedMovies)
    );

    return {
      ...state,
      movies: updatedMovies,
      recommendedMovies: updatedRecommendedMovies,
      bookmarkedMovies,
    };
  }),

  on(unbookmarkMovie, (state, { movieId }) => {
    const updatedMovies = state.movies.map((movie) =>
      movie.id === movieId ? { ...movie, isBookmarked: false } : movie
    );

    const updatedRecommendedMovies = state.recommendedMovies.map((movie) =>
      movie.id === movieId ? { ...movie, isBookmarked: false } : movie
    );

    const bookmarkedMovies = [
      ...updatedMovies.filter((movie) => movie.isBookmarked),
      ...updatedRecommendedMovies.filter((movie) => movie.isBookmarked),
    ];

    localStorage.setItem(
      'bookmarkedMoviesAndSeries',
      JSON.stringify(bookmarkedMovies)
    );

    return {
      ...state,
      movies: updatedMovies,
      recommendedMovies: updatedRecommendedMovies,
      bookmarkedMovies,
    };
  }),
  on(MovieActions.bookmarkTvSeries, (state, { tvSeriesId }) => {
    const updatedTvSeriesMovies = state.tvSeriesMovies.map((tvSeries) =>
      tvSeries.id === tvSeriesId
        ? { ...tvSeries, isBookmarked: true }
        : tvSeries
    );
    return { ...state, tvSeriesMovies: updatedTvSeriesMovies };
  }),
  on(MovieActions.unbookmarkTvSeries, (state, { tvSeriesId }) => {
    const updatedTvSeriesMovies = state.tvSeriesMovies.map((tvSeries) =>
      tvSeries.id === tvSeriesId
        ? { ...tvSeries, isBookmarked: false }
        : tvSeries
    );
    return { ...state, tvSeriesMovies: updatedTvSeriesMovies };
  })
);
