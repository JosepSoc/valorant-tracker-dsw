import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AgentApi } from '../../models/agent-api.model';

@Injectable({
  providedIn: 'root',
})
export class AgentsApiService {
  constructor(private http: HttpClient) {}

  getAgents(): Observable<AgentApi[]> {
    return this.http.get('http://localhost:5000/api/agents').pipe(
      map((response: any) => {
        if (response.data) {
          return response.data.map((data: any) => {
            return {
              name: data.name,
              description: data.description,
              _id: data._id,
            };
          });
        } else {
          throw new Error('Error fetching agents');
        }
      })
    );
  }

  getAgent(id: string): Observable<AgentApi> {
    return this.http
      .get(`http://localhost:5000/api/agents/${id}`, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200 && response.body.data) {
            return {
              name: response.body.data.name,
              description: response.body.data.description,
              _id: response.body.data._id,
            };
          } else {
            throw new Error(response.body.message);
          }
        })
      );
  }

  createAgent(agent: AgentApi): Observable<AgentApi> {
    return this.http
      .post('http://localhost:5000/api/agents', agent, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 201 && response.body.data) {
            return {
              name: response.body.data.name,
              description: response.body.data.description,
              _id: response.body.data._id,
            };
          } else {
            throw new Error(response.body.message);
          }
        })
      );
  }

  updateAgent(agent: AgentApi): Observable<AgentApi> {
    return this.http
      .put(`http://localhost:5000/api/agents/${agent._id}`, agent, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200 && response.body.data) {
            return {
              name: response.body.data.name,
              description: response.body.data.description,
              _id: response.body.data._id,
            };
          } else {
            throw new Error(response.body.message);
          }
        })
      );
  }

  deleteAgent(id: string): Observable<AgentApi> {
    return this.http
      .delete(`http://localhost:5000/api/agents/${id}`, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200 && response.body.data) {
            return {
              name: response.body.data.name,
              description: response.body.data.description,
              _id: response.body.data._id,
            };
          } else {
            throw new Error(response.body.message);
          }
        })
      );
  }
}
