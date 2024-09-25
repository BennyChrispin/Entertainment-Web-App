export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  year: number;
  category: string;
  rating: number;
  isBookmarked: boolean;
}

export interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

export const initialMovieState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};
