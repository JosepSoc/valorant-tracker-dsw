import { ObjectId } from 'mongodb';

export class Rol {
  constructor(
    public name: string,
    public description: string,
    public _id?: ObjectId
  ) { }
}