import { AgentApi } from 'src/app/models/agent-api.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AgentCrudService {
  private agent?: AgentApi;

  setAgent(agent: AgentApi | undefined): void {
    this.agent = agent;
  }

  getAgent(): AgentApi | undefined {
    return this.agent;
  }
}
