import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  showDropdown = false;
  constructor(public router: Router) {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logOut() {
    this.router.navigate(['/auth']);
  }
}
