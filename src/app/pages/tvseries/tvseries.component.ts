import { Component } from '@angular/core';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrl: './tvseries.component.css',
})
export class TvseriesComponent {
  searchQuery: string = '';

  // This method updates the search query whenever the search bar emits a new value
  onSearch(query: string) {
    this.searchQuery = query.toLowerCase();
  }
}
