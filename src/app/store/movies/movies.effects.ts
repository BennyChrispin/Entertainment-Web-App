import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../../core/services/movies.service';
import * as MovieActions from './movies.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
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
          map((movies) => MovieActions.loadMoviesSuccess({ movies })),
          catchError((error) =>
            of(MovieActions.loadMoviesFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
