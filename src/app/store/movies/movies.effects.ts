import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../../core/services/movies.service';
import * as MovieActions from './movies.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  loadTvSeriesMovies,
  loadTvSeriesMoviesFailure,
  loadTvSeriesMoviesSuccess,
} from './movies.actions';

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions);

  constructor(private moviesService: MoviesService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadTrendMovies),
      mergeMap(() =>
        this.moviesService.getTrendingMovies().pipe(
          tap((movies) => {
            console.log('Fetched Trending Movies In Store:', movies);
          }),
          map((movies) => MovieActions.loadTrendMoviesSuccess({ movies })),
          catchError((error) =>
            of(MovieActions.loadTrendMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );
  loadRecommendedMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadRecommendedMovies),
      mergeMap((action) =>
        this.moviesService.getRecommendedMovies(action.movieId).pipe(
          map((movies) =>
            MovieActions.loadRecommendedMoviesSuccess({ movies })
          ),
          catchError((error) =>
            of(
              MovieActions.loadRecommendedMoviesFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
  loadTvSeriesMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTvSeriesMovies),
      mergeMap(() =>
        this.moviesService.getTvSeriesMovies().pipe(
          map((tvSeriesMovies) =>
            loadTvSeriesMoviesSuccess({ tvSeriesMovies })
          ),
          catchError((error) => of(loadTvSeriesMoviesFailure({ error })))
        )
      )
    )
  );
}
