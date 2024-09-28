import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrl: './bookmarked.component.css',
})
export class BookmarkedComponent {
  searchQuery = '';
  // Method to handle search query emitted from SearchBarComponent
  onSearch(query: string) {
    this.searchQuery = query;
  }
}
