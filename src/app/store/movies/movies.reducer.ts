import { createReducer, on } from '@ngrx/store';
import { MovieState, initialMovieState } from './movies.state';
import * as MovieActions from './movies.actions';

export const movieReducer = createReducer(
  initialMovieState,
  on(MovieActions.loadMovies, (state) => ({ ...state, loading: true })),
  on(MovieActions.loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies,
    loading: false,
  })),
  on(MovieActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
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
