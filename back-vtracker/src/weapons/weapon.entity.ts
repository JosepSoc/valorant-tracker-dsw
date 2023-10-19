import { ObjectId } from "mongodb";

export class Weapon{
  constructor(
    public name: string,
    public description: string,
    public weaponType_code: number,
    public _id?: ObjectId
    )
    {}
}