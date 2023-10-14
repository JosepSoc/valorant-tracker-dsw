//import { Agent } from 'src/agents/agent.entity';
import { ObjectId } from 'mongodb';

export class Agent {
  constructor(
    public name: string,
    public description: string,
    public habilities: string[],
    public _id?: ObjectId
  ) { }
}