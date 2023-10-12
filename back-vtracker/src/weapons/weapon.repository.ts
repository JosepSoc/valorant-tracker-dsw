import { Repository } from "../shared/repository.js";
import { Weapon } from "./weapon.entity.js";
import { db } from "../shared/db/connection.js";
import { ObjectId } from "mongodb";


const weapons = db.collection<Weapon>('weapons');

export class WeaponRepository implements Repository<Weapon> {

  public async findAll(): Promise<Weapon[] | undefined>{
    return await weapons.find().toArray();
  }

  public async findOne(item: { id: string; }): Promise<Weapon | undefined> {
    const _id = new ObjectId(item.id);
    return (await weapons.findOne({_id})) || undefined;
  }

  public async add(item: Weapon): Promise<Weapon | undefined> {
    item._id = (await weapons.insertOne(item)).insertedId;
    return item;
  }

  public async update(id: string, item: Weapon): Promise<Weapon | undefined> {
    const _id = new ObjectId(id);
    return await weapons.findOneAndUpdate( {_id}, {$set: item}, {returnDocument: 'after'}) || undefined;
  }

  public async delete(item: { id: string; }): Promise<Weapon | undefined> {
    const _id = new ObjectId(item.id);
    return (await weapons.findOneAndDelete({_id})) || undefined;
  }




}