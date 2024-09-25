import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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

  getTrendingMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/trending/movie/week?api_key=${this.apiKey}`,
      { headers: this.headers }
    );
  }
  getRecommendedMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`,
      { headers: this.headers }
    );
  }
}
