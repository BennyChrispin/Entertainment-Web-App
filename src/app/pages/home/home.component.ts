import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchQuery = '';
  // Method to handle search query emitted from SearchBarComponent
  onSearch(query: string) {
    this.searchQuery = query;
  }
}
