export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  year: number;
  category: string;
  genre: string;
  rating: number;
  isBookmarked: boolean;
}

export interface MovieState {
  movies: Movie[];
  recommendedMovies: Movie[];
  tvSeriesMovies: Movie[];
  bookmarkedMovies: Movie[];
  bookmarkedTvSeries: Movie[];
  loading: boolean;
  error: string | null;
}

export const initialMovieState: MovieState = {
  movies: [],
  recommendedMovies: [],
  tvSeriesMovies: [],
  bookmarkedMovies: [],
  bookmarkedTvSeries: [],
  loading: false,
  error: '',
};
