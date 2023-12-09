import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http
      .get('http://localhost:5000/api/users')
      .pipe(
        map((response: any) => {
          if (response.data) {
            return response.data.map((data: any) => {
              return {
                puuid: data.puuid,
                user: data.name_lastname,
                email: data.email,
                crosshair: data.crosshair,
                password: data.password,
                agents: data.agents,
                _id: data._id,
              };
            });
          } else {
            throw new Error('Error fetching users');
          }
        })
      );
  }

  getUser(id: string): Observable<Users> {
    return this.http
      .get(`http://localhost:5000/api/users/${id}`, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200 && response.body.data) {
            return {
              puuid: response.body.data.puuid,
              user: response.body.data.name_lastname,
              email: response.body.data.email,
              crosshair: response.body.data.crosshair,
              password: response.body.data.password,
              agents: response.body.data.agents,
              _id: response.body.data._id,
            };
          } else {
            throw new Error(response.body.message);
          }
        })
      );
  }

  createUser(user: Users): Observable<Users> {
    return this.http
      .post('http://localhost:5000/api/users', user, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 201) {
            return {
              puuid: response.body.data.puuid,
              user: response.body.data.name_lastname,
              email: response.body.data.email,
              crosshair: response.body.data.crosshair,
              password: response.body.data.password,
              agents: response.body.data.agents,
              _id: response.body.data._id,
            };
          } else {
            throw new Error(response.body.message);
          }
        })
      );
  }

  updateUser(user: Users): Observable<Users> {
    return this.http
      .put(`http://localhost:5000/api/users/${user._id}`, user, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return {
              puuid: response.body.data.puuid,
              user: response.body.data.name_lastname,
              email: response.body.data.email,
              crosshair: response.body.data.crosshair,
              password: response.body.data.password,
              agents: response.body.data.agents,
              _id: response.body.data._id,
            };
          } else {
            throw new Error(response.body.message);
          }
        })
      );
  }

  deleteUser(id: string): Observable<Users> {
    return this.http
      .delete(`http://localhost:5000/api/users/${id}`, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return {
              puuid: response.body.data.puuid,
              user: response.body.data.name_lastname,
              email: response.body.data.email,
              crosshair: response.body.data.crosshair,
              password: response.body.data.password,
              agents: response.body.data.agents,
              _id: response.body.data._id,
            };
          } else {
            throw new Error(response.body.message);
          }
        })
      );
  }


}
