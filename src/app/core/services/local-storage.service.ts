import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey = 'bookmarkedMoviesAndSeries';

  saveBookmarks(bookmarks: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(bookmarks));
  }

  getBookmarks() {
    const bookmarks = localStorage.getItem(this.storageKey);
    return bookmarks ? JSON.parse(bookmarks) : [];
  }

  clearBookmarks() {
    localStorage.removeItem(this.storageKey);
  }
}
