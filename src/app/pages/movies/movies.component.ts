import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  searchQuery: string = '';

  // This method updates the search query whenever the search bar emits a new value
  onSearch(query: string) {
    this.searchQuery = query.toLowerCase();
  }
}
