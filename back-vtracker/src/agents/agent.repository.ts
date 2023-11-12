import { Repository } from "../shared/repository.js";
import { Agent } from "./agent.entity.js";
import { db } from "../shared/db/connection.js";
import { ObjectId } from "mongodb";


const agents = db.collection<Agent>('agents');

export class AgentRepository implements Repository<Agent> {

  public async findAll(): Promise<Agent[] | undefined> {
    return await agents.find().toArray();
  }

  public async findOne(item: { id: string; }): Promise<Agent | undefined> {
    const _id = new ObjectId(item.id);
    return (await agents.findOne({ _id })) || undefined;
  }

  public async add(item: Agent): Promise<Agent | undefined> {
    item._id = (await agents.insertOne(item)).insertedId;
    return item;
  }

  public async update(id: string, item: Agent): Promise<Agent | undefined> {
    const _id = new ObjectId(id);
    return await agents.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' }) || undefined;
  }

  public async delete(item: { id: string; }): Promise<Agent | undefined> {
    const _id = new ObjectId(item.id);
    return (await agents.findOneAndDelete({ _id })) || undefined;
  }

}