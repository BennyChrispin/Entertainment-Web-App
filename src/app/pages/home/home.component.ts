import { Component } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getTrendingMovies().subscribe({
      next: () => {},
      error: (err) => console.error('Error fetching trending movies:', err),
    });

    this.moviesService.getRecommendedMovies().subscribe({
      next: () => {},
      error: (err) => console.error('Error fetching recommended movies:', err),
    });
  }
}
