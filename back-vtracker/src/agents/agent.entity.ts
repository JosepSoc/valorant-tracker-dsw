import { ObjectId } from 'mongodb';

export class Agent {
  constructor(
    public name: string,
    public description: string,
    public habilities: string[],
    public role: string,
    public _id?: ObjectId
  ) { }
}