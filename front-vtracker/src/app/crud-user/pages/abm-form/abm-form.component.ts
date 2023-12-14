import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-abm-form',
  templateUrl: './abm-form.component.html',
  styleUrls: ['./abm-form.component.scss'],
})
export class AbmFormComponent {

  constructor(public dialog: MatDialog, private router: ActivatedRoute, private api: UsersApiService, private router2: Router) { }

  entityText = 'User';
  isUpdate = false;
  
  puuid = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  crosshair = new FormControl('');

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(params => {
      this.puuid.setValue(params.get('puuid'));
      this.username.setValue(params.get('username'));
      this.password.setValue(params.get('password'));
      this.email.setValue(params.get('email'));
      this.crosshair.setValue(params.get('crosshair'));
    });
  }

  isUpdateChecker(): boolean {
    this.router.queryParamMap.subscribe(params => {
      if(params.get('id')===null){
        this.isUpdate = false;
      } else {
        this.isUpdate = true;
      }
    });
    return this.isUpdate;
  }

  previousValues() {
    this.router.queryParamMap.subscribe(params => {
      this.puuid.setValue(params.get('puuid'));
      this.username.setValue(params.get('username'));
      this.password.setValue(params.get('password'));
      this.email.setValue(params.get('email'));
      this.crosshair.setValue(params.get('crosshair'));
    });
  }

  getFormValues(){
    return {
      _id: this.router.snapshot.queryParamMap.get('id') || '',
      puuid: this.puuid.value || '',
      username: this.username.value || '',
      password: this.password.value || '',
      email: this.email.value || '',
      crosshair: this.crosshair.value || ''
    }
    
  }

  updateUser(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        panelClass: 'confirm-dialog',
        width: '250px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          const updatedUser = this.getFormValues();
          this.api.updateUser(updatedUser).subscribe({
            next: (data: any) => {
              console.log(data);
            },
            error: (error: any) => {
              console.error('Error updating user:', error);
            }
          });
          this.router2.navigate(['/abm']);
        }
      });
    
  }

  createUser(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        panelClass: 'confirm-dialog',
        width: '250px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          const createdUser = this.getFormValues();
          this.api.createUser(createdUser).subscribe({
            next: (data: any) => {
              console.log(data);
            },
            error: (error: any) => {
              console.error('Error updating user:', error);
            }
          });
          this.router2.navigate(['/abm']);
        }
      });
  }
  
  }

