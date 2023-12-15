import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/services/express-Api/users-api.service';
import { UserCrudService } from 'src/app/services/frontend-services/users-crud.service';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-abm-form',
  templateUrl: './abm-form.component.html',
  styleUrls: ['./abm-form.component.scss'],
})
export class AbmFormComponent {
  constructor(
    public dialog: MatDialog,
    private userCrudService: UserCrudService,
    private api: UsersApiService,
    private router2: Router
  ) {}

  entityText = 'User';
  user?: Users | undefined;
  isUpdate = false;

  puuid = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  crosshair = new FormControl('');

  ngOnInit(): void {
    this.user = this.userCrudService.getUser();
    this.puuid.setValue(this.user?.puuid || null);
    this.username.setValue(this.user?.username || null);
    this.password.setValue(this.user?.password || null);
    this.email.setValue(this.user?.email || null);
    this.crosshair.setValue(this.user?.crosshair || null);
  }

  isUpdateChecker(): boolean {
    if (this.userCrudService.getUser() === undefined) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
    return this.isUpdate;
  }

  previousValues() {
    this.puuid.setValue(this.user?.puuid || null);
    this.username.setValue(this.user?.username || null);
    this.password.setValue(this.user?.password || null);
    this.email.setValue(this.user?.email || null);
    this.crosshair.setValue(this.user?.crosshair || null);
  }

  getFormValues() {
    return {
      _id: this.user?._id || '',
      puuid: this.puuid.value || '',
      username: this.username.value || '',
      password: this.password.value || '',
      email: this.email.value || '',
      crosshair: this.crosshair.value || '',
    };
  }

  updateUser(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'confirm-dialog',
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const updatedUser = this.getFormValues();
        this.api.updateUser(updatedUser).subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (error: any) => {
            console.error('Error updating user:', error);
          },
        });
        this.userCrudService.setUser(undefined);
        this.router2.navigate(['/user']);
      }
    });
  }

  createUser(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'confirm-dialog',
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const createdUser = this.getFormValues();
        this.api.createUser(createdUser).subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (error: any) => {
            console.error('Error updating user:', error);
          },
        });
        this.userCrudService.setUser(undefined);
        this.router2.navigate(['/user']);
      }
    });
  }
}
