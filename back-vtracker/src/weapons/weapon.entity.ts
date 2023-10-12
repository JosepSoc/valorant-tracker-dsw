import { ObjectId } from "mongodb";

export class Weapon{
  constructor(
    public name: string,
    public description: string,
    //public weapon-type: number
    public _id?: ObjectId
    )
    {}
}