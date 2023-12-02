import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-abm-form',
  templateUrl: './abm-form.component.html',
  styleUrls: ['./abm-form.component.scss'],
})
export class AbmFormComponent {
  entityText = 'Users';

  @ViewChild('puuidBox') puuidBox!: ElementRef;
  @ViewChild('usernameBox') usernameBox!: ElementRef;
  @ViewChild('passwordBox') passwordBox!: ElementRef;
  @ViewChild('emailBox') emailBox!: ElementRef;
  @ViewChild('crosshairBox') crosshairBox!: ElementRef;

  clearFields() {
    console.log('clear');
    this.puuidBox.nativeElement.value = '';
    this.usernameBox.nativeElement.value = '';
    this.passwordBox.nativeElement.value = '';
    this.emailBox.nativeElement.value = '';
    this.crosshairBox.nativeElement.value = '';

  }
}
