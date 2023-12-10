import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  navform = new FormGroup({
    navuser: new FormControl('', Validators.required),
    navregion: new FormControl('', Validators.required)
  });

  searchMode = false;
  searchQuery = '';

  toggleSearchMode() {
    this.searchMode = !this.searchMode;
    if (!this.searchMode) {
      this.searchQuery = '';
    }
  }

  onSubmit(): any {
    if (this.navform.get('navuser')?.value !== '' && this.navform.get('navregion')?.value !== '') {
      let user = (this.navform.get('navuser')?.value)?.split('#') || '';
      localStorage.setItem('matchs', JSON.stringify([]));

      //! VER COMO MEJORAR ESTO
      this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/profile'], { queryParams: { username: user[0], tag: user[1], region: this.navform.get('navregion')?.value } });
      this.toggleSearchMode();

    } else {
      console.log('Form not submitted');
    }
  }


}
