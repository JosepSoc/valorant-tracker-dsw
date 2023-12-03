import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @ViewChild('logHeader') logHeader!: ElementRef;
  
  isRegister: boolean = false;

  ngAfterViewInit(){
    if(this.isRegister === true){
      this.logHeader.nativeElement.innerHTML = "Sign up";
    }
    else{
      this.logHeader.nativeElement.innerHTML = "Log in";
    }
  }
  turnLogin(){
    this.logHeader.nativeElement.innerHTML = "Log in";
    this.isRegister = false;
  }

  turnRegister(){
    this.logHeader.nativeElement.innerHTML = "Sign up";
    this.isRegister = true;
  }
}
