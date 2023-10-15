import { Repository } from "../shared/repository.js";
import { Rol } from "./rols.entity.js";
import { db } from "../shared/db/connection.js";
import { ObjectId } from "mongodb";


const rols = db.collection<Rol>('rols');

export class RolsRepository implements Repository<Rol> {

  public async findAll(): Promise<Rol[] | undefined> {
    return await rols.find().toArray();
  }

  public async findOne(item: { id: string; }): Promise<Rol | undefined> {
    const _id = new ObjectId(item.id);
    return (await rols.findOne({ _id })) || undefined;
  }

  public async add(item: Rol): Promise<Rol | undefined> {
    item._id = (await rols.insertOne(item)).insertedId;
    return item;
  }

  public async update(id: string, item: Rol): Promise<Rol | undefined> {
    const _id = new ObjectId(id);
    return await rols.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' }) || undefined;
  }

  public async delete(item: { id: string; }): Promise<Rol | undefined> {
    const _id = new ObjectId(item.id);
    return (await rols.findOneAndDelete({ _id })) || undefined;
  }




}