//import { Agent } from 'src/agents/agent.entity';
import { ObjectId } from 'mongodb';

export class User{
  constructor(
    public puuid: string,
    public name_lastname: string,
    public email: string,
    public crosshair: string,
    public password: string,
    // public nombre_agente: string,
    public _id ?: ObjectId
    )
    {}
}