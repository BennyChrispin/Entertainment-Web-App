import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../../store/movies/movies.state';
import {
  selectError,
  selectLoading,
  selectRecommendedMovies,
} from '../../store/movies/movies.selectors';
import {
  bookmarkMovie,
  loadRecommendedMovies,
  unbookmarkMovie,
} from '../../store/movies/movies.actions';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'],
})
export class RecommendedComponent implements OnInit {
  private searchQuery$ = new BehaviorSubject<string>('');
  @Input() set searchQuery(query: string) {
    this.searchQuery$.next(query);
  }

  recommendedMovies$!: Observable<Movie[]>;
  filteredMovies$!: Observable<Movie[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string>;
  resultCount$!: Observable<number>;
  searchResultMessage$!: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Dispatch the action to load recommended movies
    this.store.dispatch(loadRecommendedMovies({ movieId: 123 }));

    // Select recommended movies, loading, and error states from the store
    this.recommendedMovies$ = this.store.select(selectRecommendedMovies);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    // Combine the movies and search query to create a filtered movies observable
    this.filteredMovies$ = combineLatest([
      this.recommendedMovies$,
      this.searchQuery$,
    ]).pipe(map(([movies, query]) => this.applyFilter(movies, query)));

    // Count the number of filtered movies
    this.resultCount$ = this.filteredMovies$.pipe(
      map((movies) => movies.length)
    );

    // Create a message based on the search results
    this.searchResultMessage$ = combineLatest([
      this.resultCount$,
      this.searchQuery$,
    ]).pipe(
      map(([count, query]) => {
        if (!query) {
          return '';
        }
        if (count === 0) {
          return `No results found for "${query}"`;
        }
        return `Found ${count} result(s) for "${query}"`;
      })
    );
  }

  // Method to apply filter based on the search query
  applyFilter(movies: Movie[], query: string): Movie[] {
    if (!query) {
      return movies;
    }
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Toggle bookmark status of a movie
  toggleBookmark(movie: Movie) {
    if (movie.isBookmarked) {
      this.store.dispatch(unbookmarkMovie({ movieId: movie.id }));
    } else {
      this.store.dispatch(bookmarkMovie({ movieId: movie.id }));
    }
  }
}
