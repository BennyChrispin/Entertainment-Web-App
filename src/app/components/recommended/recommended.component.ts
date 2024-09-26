import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../store/movies/movies.state';
import {
  selectError,
  selectLoading,
  selectRecommendedMovies,
} from '../../store/movies/movies.selectors';
import { loadRecommendedMovies } from '../../store/movies/movies.actions';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadRecommendedMovies({ movieId: 123 }));
    this.recommendedMovies$ = this.store.select(selectRecommendedMovies);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      if (currentRoute.includes('movies')) {
        this.pageTitle = 'Movies';
      } else {
        this.pageTitle = 'Recommended for you';
      }
    });
  }
}
