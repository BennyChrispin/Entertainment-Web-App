import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  pageTitle: string = 'Recommended for you';

  recommendedMovies$!: Observable<Movie[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadRecommendedMovies({ movieId: 123 }));
    this.recommendedMovies$ = this.store.select(selectRecommendedMovies);
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
