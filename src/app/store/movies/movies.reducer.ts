import { Action, createReducer, on } from '@ngrx/store';
import { MovieState, initialMovieState } from './movies.state';
import * as MovieActions from './movies.actions';

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
  on(MovieActions.bookmarkMovie, (state, { id }) => {
    const updatedMovies = state.movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, isBookmarked: !movie.isBookmarked };
      }
      return movie;
    });
    return { ...state, movies: updatedMovies };
  })
);
