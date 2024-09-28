import { Component, Input, OnInit } from '@angular/core';
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
export class BookMarkListComponent implements OnInit {
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
    // Initialize filtered observables
    this.filteredMovies$ = this.bookmarkedMovies$;
    this.filteredTvSeries$ = this.bookmarkedTvSeries$;

    // Subscribe to the original bookmarked movies and tv series to count them
    this.bookmarkedMovies$.subscribe((movies) => {
      this.movieCount = movies.length;
    });
    this.bookmarkedTvSeries$.subscribe((tvSeries) => {
      this.tvSeriesCount = tvSeries.length;
    });
  }

  // Method to handle the search query
  onSearch(query: string) {
    this.filteredMovies$ = this.bookmarkedMovies$.pipe(
      map((movies) =>
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        )
      )
    );

    this.filteredTvSeries$ = this.bookmarkedTvSeries$.pipe(
      map((tvSeries) =>
        tvSeries.filter((tv) =>
          tv.title.toLowerCase().includes(query.toLowerCase())
        )
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
