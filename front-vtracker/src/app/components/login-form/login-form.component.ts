import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @ViewChild('logHeader') logHeader!: ElementRef;
  @ViewChild('usernameBox') usernameBox!: ElementRef;
  @ViewChild('passwordBox') passwordBox!: ElementRef;
  @ViewChild('confirmpassBox') confirmpassBox!: ElementRef;
  @ViewChild('emailBox') emailBox!: ElementRef;
  @ViewChild('termsCheckBox') termsCheckBox!: ElementRef;
  @ViewChild('registerBtn') registerBtn!: ElementRef;
  @ViewChild('gotoLoginBtn') gotoLoginBtn!: ElementRef;
  
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

  }

  turnRegister(){
    
  }
}
