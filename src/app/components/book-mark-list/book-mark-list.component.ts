import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectBookmarkedMovies,
  selectBookmarkedTvSeries,
} from '../../store/movies/movies.selectors';
import { Movie } from '../../store/movies/movies.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-mark-list',
  templateUrl: './book-mark-list.component.html',
  styleUrls: ['./book-mark-list.component.css'],
})
export class BookMarkListComponent implements OnInit, OnChanges {
  @Input() searchQuery!: string;
  bookmarkedMovies$!: Observable<Movie[]>;
  bookmarkedTvSeries$!: Observable<Movie[]>;
  filteredMovies$!: Observable<Movie[]>;
  filteredTvSeries$!: Observable<Movie[]>;
  movieCount: number = 0;
  tvSeriesCount: number = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.bookmarkedMovies$ = this.store.select(selectBookmarkedMovies);
    this.bookmarkedTvSeries$ = this.store.select(selectBookmarkedTvSeries);

    // Initialize filtered observables with all movies and TV series initially
    this.filteredMovies$ = this.bookmarkedMovies$;
    this.filteredTvSeries$ = this.bookmarkedTvSeries$;

    // Subscribe to count movies and TV series
    this.filteredMovies$.subscribe((movies) => {
      this.movieCount = movies.length;
    });
    this.filteredTvSeries$.subscribe((tvSeries) => {
      this.tvSeriesCount = tvSeries.length;
    });
  }

  // Detect changes in searchQuery input and filter the data
  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery']) {
      this.onSearch(this.searchQuery);
    }
  }

  // Method to handle the search query and filter movies/TV series
  onSearch(query: string) {
    const lowerQuery = query.toLowerCase();

    // Filter the movies without subscribing here
    this.filteredMovies$ = this.bookmarkedMovies$.pipe(
      map((movies) =>
        movies.filter((movie) => movie.title.toLowerCase().includes(lowerQuery))
      )
    );

    // Filter the TV series without subscribing here
    this.filteredTvSeries$ = this.bookmarkedTvSeries$.pipe(
      map((tvSeries) =>
        tvSeries.filter((tv) => tv.title.toLowerCase().includes(lowerQuery))
      )
    );
    // Update counts based on filtered results
    this.filteredMovies$.subscribe((movies) => {
      this.movieCount = movies.length;
    });
    this.filteredTvSeries$.subscribe((tvSeries) => {
      this.tvSeriesCount = tvSeries.length;
    });
  }
}
