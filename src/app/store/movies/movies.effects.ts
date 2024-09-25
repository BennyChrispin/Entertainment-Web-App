import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../../core/services/movies.service';
import * as MovieActions from './movies.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions);

  constructor(private moviesService: MoviesService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      mergeMap(() =>
        this.moviesService.getTrendingMovies().pipe(
          tap((movies) => {
            console.log('Fetched Trending Movies In Store:', movies);
          }),
          map((movies) => MovieActions.loadMoviesSuccess({ movies })),
          catchError((error) =>
            of(MovieActions.loadMoviesFailure({ error: error.message }))
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
          // Pass movieId here
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
}
