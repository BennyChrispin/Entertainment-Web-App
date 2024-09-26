import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTvSeriesMovies());
    this.tvSeriesMovies$ = this.store.select(selectTvSeriesMovies);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  bookmarkTvSerieMovie(tvSeriesId: number) {
    this.store.dispatch(bookmarkTvSeries({ tvSeriesId }));
    console.log('This Tv bookmark', tvSeriesId);
  }
  unbookmarkMovie(tvSeriesId: number) {
    this.store.dispatch(unbookmarkTvSeries({ tvSeriesId }));
    console.log('This Tv bookmark', tvSeriesId);
  }
}
