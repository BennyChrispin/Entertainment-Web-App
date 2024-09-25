import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  isScrolled = false;
  placeholder: string = 'Search...';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updatePlaceholder();
      });

    this.updatePlaceholder();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const searchBar = document.getElementById('search-bar');
    if (window.pageYOffset > 50) {
      searchBar?.classList.add('scrolled');
    } else {
      searchBar?.classList.remove('scrolled');
    }
  }

  updatePlaceholder() {
    const currentRoute = this.router.url;

    if (currentRoute.includes('home')) {
      this.placeholder = 'Search for movies or TV series';
    } else if (currentRoute.includes('bookmarked')) {
      this.placeholder = 'Search for bookmarked shows';
    } else if (currentRoute.includes('movies')) {
      this.placeholder = 'Search for movies';
    } else if (currentRoute.includes('tvseries')) {
      this.placeholder = 'Search for TV series';
    } else {
      this.placeholder = 'Search...';
    }
  }
}
