import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  selectMovies,
  selectRecommendedMovies,
  selectLoading,
  selectError,
} from '../../store/movies/movies.selectors';
import { Movie } from '../../store/movies/movies.state';
import {
  loadTrendMovies,
  loadRecommendedMovies,
  bookmarkMovie,
  unbookmarkMovie,
} from '../../store/movies/movies.actions';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  private searchQuery$ = new BehaviorSubject<string>('');
  @Input() set searchQuery(query: string) {
    this.searchQuery$.next(query);
  }
  filteredMovies$!: Observable<Movie[]>;
  movies$!: Observable<Movie[]>;
  resultCount$!: Observable<number>;
  searchResultMessage$!: Observable<string>;
  loading$!: Observable<boolean>;
  error$!: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTrendMovies());
    this.store.dispatch(loadRecommendedMovies({ movieId: 123 }));

    const trendingMovies$ = this.store.select(selectMovies);
    const recommendedMovies$ = this.store.select(selectRecommendedMovies);

    this.filteredMovies$ = combineLatest([
      trendingMovies$,
      recommendedMovies$,
      this.searchQuery$,
    ]).pipe(
      map(([trendingMovies, recommendedMovies, query]) => {
        // Combine and filter movies based on search query
        const allMovies = [...trendingMovies, ...recommendedMovies];
        return allMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );
      })
    );

    // Calculate the count of filtered movies
    this.resultCount$ = this.filteredMovies$.pipe(
      map((movies) => movies.length)
    );

    // Generate the search result message based on the query and result count
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

    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  toggleBookmark(movie: Movie) {
    if (movie.isBookmarked) {
      this.store.dispatch(unbookmarkMovie({ movieId: movie.id }));
    } else {
      this.store.dispatch(bookmarkMovie({ movieId: movie.id }));
    }
  }
}
