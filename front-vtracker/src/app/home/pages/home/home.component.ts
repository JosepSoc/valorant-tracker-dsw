import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  name = new FormControl('', [Validators.required]);
  tag = new FormControl('', [Validators.required]);


  handleKeyUp(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.submit();
    }

  }

  submit() {
    console.log(this.name.value + ' ' + this.tag.value);
  }

}