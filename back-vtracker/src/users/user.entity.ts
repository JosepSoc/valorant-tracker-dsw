import { ObjectId } from 'mongodb';

export class User{
  constructor(
    public puuid: string,
    public name_lastname: string,
    public email: string,
    public crosshair: string,
    public password: string,
    // public agentes: string[],
    public _id ?: ObjectId
    )
    {}
}