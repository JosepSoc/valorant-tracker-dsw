//import { Agent } from 'src/agents/agent.entity';

export class User{
  constructor(
    public puuid: string,
    public name_lastname: string,
    public email: string,
    public crosshair: string,
    public password: string,
    // public agent: Agent,
    )
    {}
}