import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matchs } from '../models/matchs.model';

@Injectable({
  providedIn: 'root'
})
export class MatchsService {

  constructor(private http: HttpClient) { }

  async getMatchs(): Promise<Observable<any>> {
    return await this.http.get<any>("https://api.henrikdev.xyz/valorant/v1/lifetime/matches/ap/primmieyk/XGOD?size=10");
  }

}
