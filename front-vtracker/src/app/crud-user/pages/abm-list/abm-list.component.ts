import { Component } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersApiService } from 'src/app/services/express-Api/users-api.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserCrudService } from 'src/app/services/frontend-services/users-crud.service';

@Component({
  selector: 'app-abm-list',
  templateUrl: './abm-list.component.html',
  styleUrls: ['./abm-list.component.scss'],
})
export class AbmListComponent {
  constructor(
    private api: UsersApiService,
    public dialog: MatDialog,
    private router: Router,
    private userCrudService: UserCrudService
  ) {}
  users: Users[] = [];

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next: (data: Users[]) => {
        this.users = data;
      },
      error: (error: any) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  deleteUser(pos: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.deleteUser(this.users[pos]._id).subscribe({
          next: (data: any) => {
            this.users.splice(pos, 1);
          },
          error: (error: any) => {
            console.error('Error deleting user:', error);
          },
        });
      }
    });
  }

  updateUser(pos: number): void {
    this.userCrudService.setUser(this.users[pos]);
    this.router.navigate(['/user/form']);
  }

  createUser(): void {
    this.router.navigate(['/user/form']);
  }
}
