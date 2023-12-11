import { Component } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersApiService } from 'src/app/services/users-api.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abm-list',
  templateUrl: './abm-list.component.html',
  styleUrls: ['./abm-list.component.scss']
})
export class AbmListComponent {
  constructor(private api: UsersApiService, public dialog:MatDialog, private router: Router) { }
  users: Users[] = [];

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next: (data: Users[]) => {
        this.users = data;
      },
      error: (error: any) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  deleteUser(pos: number): void {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        
        
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.api.deleteUser(this.users[pos]._id).subscribe({
            next: (data: any) => {
              this.users.splice(pos, 1);
            },
            error: (error: any) => {
              console.error('Error deleting user:', error);
            }
          });
        } 

      });
  }  

  updateUser(pos: number): void {
    this.router.navigate(['/abm/form'], { queryParams: { id: this.users[pos]._id, puuid: this.users[pos].puuid, username: this.users[pos].user, password: this.users[pos].password, email: this.users[pos].email, crosshair: this.users[pos].crosshair }});
    
  }

  

}
