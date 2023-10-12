import { Repository } from "../shared/repository.js";
import { WeaponType } from "./weaponType.entity.js";
import { db } from "../shared/db/connection.js";
import { ObjectId } from "mongodb";


const weaponTypes = db.collection<WeaponType>('weapons');

export class WeaponTypeRepository implements Repository<WeaponType> {

  public async findAll(): Promise<WeaponType[] | undefined>{
    return await weaponTypes.find().toArray();
  }

  public async findOne(item: { id: string; }): Promise<WeaponType | undefined> {
    const _id = new ObjectId(item.id);
    return (await weaponTypes.findOne({_id})) || undefined;
  }

  public async add(item: WeaponType): Promise<WeaponType | undefined> {
    item._id = (await weaponTypes.insertOne(item)).insertedId;
    return item;
  }

  public async update(id: string, item: WeaponType): Promise<WeaponType | undefined> {
    const _id = new ObjectId(id);
    return await weaponTypes.findOneAndUpdate( {_id}, {$set: item}, {returnDocument: 'after'}) || undefined;
  }

  public async delete(item: { id: string; }): Promise<WeaponType | undefined> {
    const _id = new ObjectId(item.id);
    return (await weaponTypes.findOneAndDelete({_id})) || undefined;
  }




}