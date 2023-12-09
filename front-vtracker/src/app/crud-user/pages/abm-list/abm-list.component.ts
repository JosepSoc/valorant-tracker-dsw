import { Component } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-abm-list',
  templateUrl: './abm-list.component.html',
  styleUrls: ['./abm-list.component.scss']
})
export class AbmListComponent {
  constructor(private api: UsersApiService) { }
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

}
