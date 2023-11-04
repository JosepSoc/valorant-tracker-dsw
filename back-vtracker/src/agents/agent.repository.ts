import { Repository } from '../shared/repository.js';
import { Agent } from './agent.entity.js';
import { db } from '../shared/db/connection.js';
import { ObjectId } from 'mongodb';

export class AgentRepository implements Repository<Agent> {
  public async findAll(): Promise<Agent[] | undefined> {
    return await db.agents.findMany();
  }

  public async findOne(item: { id: string }): Promise<Agent | undefined> {
    const _id = item.id;
    return (await db.agents.findUnique({ where: { id: _id } })) || undefined;
  }

  public async add(item: Agent): Promise<Agent | undefined> {
    await db.agents.create({
      data: {
        name: item.name,
        description: item.description,
        roleId: item.roleId,
        usersIds: item.usersIds,
      },
    });
    return item;
  }

  public async update(id: string, item: Agent): Promise<Agent | undefined> {
    const _id = new ObjectId(id);
    return (
      (await db.agents.findOneAndUpdate(
        { _id },
        { $set: item },
        { returnDocument: 'after' }
      )) || undefined
    );
  }

  public async delete(item: { id: string }): Promise<Agent | undefined> {
    const _id = new ObjectId(item.id);
    return (await agents.findOneAndDelete({ _id })) || undefined;
  }
}
