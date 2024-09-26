import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBookmarkedMovies } from '../../store/movies/movies.selectors';
import { Movie } from '../../store/movies/movies.state';

@Component({
  selector: 'app-book-mark-list',
  templateUrl: './book-mark-list.component.html',
  styleUrl: './book-mark-list.component.css',
})
export class BookMarkListComponent {
  bookmarkedMovies$!: Observable<Movie[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.bookmarkedMovies$ = this.store.select(selectBookmarkedMovies);
  }
}
