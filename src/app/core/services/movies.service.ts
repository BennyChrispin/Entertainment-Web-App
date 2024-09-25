import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Movie } from '../../store/movies/movies.state';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'edd757d64ecf2fa164eec51450b577b9';
  private headers = new HttpHeaders({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGQ3NTdkNjRlY2YyZmExNjRlZWM1MTQ1MGI1NzdiOSIsIm5iZiI6MTcyNzI1NTkwMy43NDg2MTcsInN1YiI6IjY1ZTRmMGQ4OTQ1MWU3MDE4NzViM2YyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jWwtXqbSsDfgORJ0SYlIV5v5SMkWUWz5ZcuDdxJS7So`,
  });

  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<Movie[]> {
    return this.http
      .get(`${this.apiUrl}/trending/movie/week?api_key=${this.apiKey}`, {
        headers: this.headers,
      })
      .pipe(
        map((response: any) => {
          return response.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            year: new Date(movie.release_date).getFullYear(),
            category: 'Trending',
            rating: movie.vote_average,
            isBookmarked: false,
          }));
        }),
        tap((movies) => {
          console.log('Trending Movies:', movies);
        })
      );
  }
}
