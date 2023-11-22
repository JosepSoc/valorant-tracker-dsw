import { Repository } from "../shared/repository.js";
import { Ability } from "./abilities.entity.js";
import { db } from "../shared/db/connection.js";
import { ObjectId } from "mongodb";


const abilities = db.collection<Ability>('abilities');

export class AbilitiesRepository implements Repository<Ability> {

  public async findAll(): Promise<Ability[] | undefined> {
    return await abilities.find().toArray();
  }

  public async findOne(item: { id: string; }): Promise<Ability | undefined> {
    const _id = new ObjectId(item.id);
    return (await abilities.findOne({ _id })) || undefined;
  }

  public async add(item: Ability): Promise<Ability | undefined> {
    item._id = (await abilities.insertOne(item)).insertedId;
    return item;
  }

  public async update(id: string, item: Ability): Promise<Ability | undefined> {
    const _id = new ObjectId(id);
    return await abilities.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' }) || undefined;
  }

  public async delete(item: { id: string; }): Promise<Ability | undefined> {
    const _id = new ObjectId(item.id);
    return (await abilities.findOneAndDelete({ _id })) || undefined;
  }




}