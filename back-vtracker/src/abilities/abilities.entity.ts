import { ObjectId } from 'mongodb';

export class Ability {
  constructor(
    public name: string,
    public description: string,
    public actionKey: string,
    public _id?: ObjectId
  ) { }
}