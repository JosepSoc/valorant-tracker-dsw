import { ObjectId } from 'mongodb';

export class User{
  constructor(
    public puuid: string,
    public username: string,
    public email: string,
    public crosshair: string,
    public password: string,
    public agents: string[],
    public _id ?: ObjectId
    )
    {}
}