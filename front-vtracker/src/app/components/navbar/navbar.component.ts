import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  searchMode = false;
  searchQuery = '';

  toggleSearchMode() {
    this.searchMode = !this.searchMode;
    if (!this.searchMode) {
      this.searchQuery = '';
    }
  }

}
