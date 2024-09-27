import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  bookmarkTvSeries,
  loadTvSeriesMovies,
  unbookmarkTvSeries,
} from '../../store/movies/movies.actions';
import {
  selectTvSeriesMovies,
  selectLoading,
  selectError,
} from '../../store/movies/movies.selectors';
import { Movie } from '../../store/movies/movies.state';

@Component({
  selector: 'app-tv-serie-list',
  templateUrl: './tv-serie-list.component.html',
  styleUrls: ['./tv-serie-list.component.css'],
})
export class TvSerieListComponent implements OnInit {
  tvSeriesMovies$!: Observable<Movie[]>;
  filteredTvSeries$!: Observable<Movie[]>;
  resultCount$!: Observable<number>;
  searchResultMessage$!: Observable<string>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  // Use BehaviorSubject to track the search query
  private searchQuerySubject = new BehaviorSubject<string>('');
  @Input()
  set searchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTvSeriesMovies());

    // Select the list of TV series
    this.tvSeriesMovies$ = this.store.select(selectTvSeriesMovies);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    // Combine the TV series observable with the search query observable
    this.filteredTvSeries$ = combineLatest([
      this.tvSeriesMovies$,
      this.searchQuerySubject.asObservable(),
    ]).pipe(
      map(([tvSeries, query]) => {
        if (!query) {
          return tvSeries;
        }
        return tvSeries.filter((series) =>
          series.title.toLowerCase().includes(query.toLowerCase())
        );
      })
    );

    // Calculate the count of filtered TV series
    this.resultCount$ = this.filteredTvSeries$.pipe(
      map((tvSeries) => tvSeries.length)
    );

    // Generate the search result message based on query and result count
    this.searchResultMessage$ = combineLatest([
      this.resultCount$,
      this.searchQuerySubject.asObservable(),
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

  toggleTvSerieBookmark(serie: Movie) {
    if (serie.isBookmarked) {
      this.store.dispatch(unbookmarkTvSeries({ tvSeriesId: serie.id }));
    } else {
      this.store.dispatch(bookmarkTvSeries({ tvSeriesId: serie.id }));
    }
  }
}
