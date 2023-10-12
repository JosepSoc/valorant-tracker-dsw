import { ObjectId } from "mongodb";

export class WeaponType{
  constructor(
    public cod_weapon_type: number,
    public description: string,
    //public weapon_name: string[],
    public _id?: ObjectId
    )
    {}
}