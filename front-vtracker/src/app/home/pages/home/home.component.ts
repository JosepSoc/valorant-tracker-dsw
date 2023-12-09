import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formplayer = new FormGroup({
    username: new FormControl('', Validators.required),
    userregion: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  onSubmit(): any {
    if (this.formplayer.get('username')?.value !== '' && this.formplayer.get('userregion')?.value !== '') {
      let user = (this.formplayer.get('username')?.value)?.split('#') || '';
      localStorage.setItem('matchs', JSON.stringify([]));
      this.router.navigate(['/profile'], { queryParams: { username: user[0], tag: user[1], region: this.formplayer.get('userregion')?.value } });

    } else {
      console.log('Form not submitted');
    }
  }

}