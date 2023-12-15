import { Users } from 'src/app/models/users.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserCrudService {
  private user?: Users;

  setUser(user: Users | undefined): void {
    this.user = user;
  }

  getUser(): Users | undefined {
    return this.user;
  }
}
