import { Repository } from "../shared/repository.js";
import { User } from "./user.entity.js";

const users = [
  new User('qHn0uNkpA1T-NqQ0zHTEqNh1BhH5SAsGWwkZsacbeKBqSdkUEaYOcYNjDomm60vMrLWHu4ulYg1C5Q', 'Jose Soco', 'josepe@gmail.com', '0;P;c;5;o;1;d;1;0b;0;1b;0', 'password'),
  new User('qHn0uNkpA1T-NqQ0zHTEqNh1BhH5SAsGWwkZsacbeKBqSdkUEaYOcYNjDomm40yMrLWHu4ulYg1C5Q', 'Santi Montedeoca', 'sag@gmail.com', '0;P;h;0;0l;4;0o;0;0a;1;0f;0;1b;0', 'elmas pollera'),
];

export class UserRepository implements Repository<User> {

  public findAll(): User[] | undefined{
    return users;
  }

  public findOne(item: { id: string; }): User | undefined {
    return users.find((user)=> user.puuid === item.id);
  }

  public add(item: User): User | undefined {
    users.push(item);
    return item;
  }

  public update(item: User): User | undefined {
    const cIndex = users.findIndex(c=> c.puuid === item.puuid);
    if(cIndex != -1){
      users[cIndex] = {...users[cIndex], ...item};
      return users[cIndex];
    }
    return undefined;
  }

  public delete(item: { id: string; }): User | undefined {
    const cIndex = users.findIndex(c=> c.puuid === item.id);
    if(cIndex!=-1){
      const c= users[cIndex];
      users.splice(cIndex, 1);
      return c;
    }
    return undefined;
  }




}