import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  placeholder: string = 'Search...';

  constructor(private router: Router) {}

  ngOnInit() {
    this.updatePlaceholder();
    // Listen to route changes
    this.router.events.subscribe(() => {
      this.updatePlaceholder();
    });
  }

  updatePlaceholder() {
    const currentRoute = this.router.url;

    if (currentRoute.includes('home')) {
      this.placeholder = 'Search for movies or TV series';
    } else if (currentRoute.includes('bookmarked')) {
      this.placeholder = 'Search for bookmarked items';
    } else if (currentRoute.includes('movies')) {
      this.placeholder = 'Search for movies';
    } else if (currentRoute.includes('tvseries')) {
      this.placeholder = 'Search for TV series';
    }
  }
}
