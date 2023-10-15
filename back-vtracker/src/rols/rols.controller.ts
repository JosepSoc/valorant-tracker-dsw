import { Request, Response, NextFunction } from 'express';
import { RolsRepository } from './rols.repository.js';
import { Rol } from "./rols.entity.js";

const repository = new RolsRepository();

export function sanitizeRolInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInputData = {
    name: req.body.name,
    description: req.body.description,
  }

  Object.keys(req.body.sanitizedInputData).forEach((key) => {
    if (req.body.sanitizedInputData[key] === undefined) {
      delete req.body.sanitizedInputData[key];
    }
  });

  next();
}


export async function findAll(req: Request, res: Response) {
  res.json({ data: await repository.findAll() });
}

export async function findOne(req: Request, res: Response) {
  const rol = await repository.findOne({ id: req.params.id });
  if (!rol) {
    res.status(404).send({ message: 'Rol not found' });
  } else {
    res.json({ data: rol });
  }
}

export async function add(req: Request, res: Response) {

  const { name, description } = req.body.sanitizedInputData;
  const rl = new Rol(name, description);
  const rl_Created = await repository.add(rl);
  return res.status(201).send({ message: 'Rol created', data: rl_Created });
}

export async function update(req: Request, res: Response) {
  const rl_Modified = await repository.update(req.params.id, req.body.sanitizedInputData);

  if (rl_Modified === undefined) {
    return res.status(404).send({ message: 'Rol not found' });
  }
  console.log(req.body.sanitizedInputData);
  console.log(req.params.id);


  console.log(rl_Modified);
  return res.status(200).send({ message: 'Rol correctly modified', data: rl_Modified });
}

export async function remove(req: Request, res: Response) {
  const rl_Deleted = await repository.delete({ id: req.params.id });

  if (rl_Deleted === undefined) {
    res.status(404).send({ message: 'Rol with this Id does not exist', data: req.params.id });
  } else {
    res.status(200).send({ message: 'Rol succesfully deleted', data: req.params.id });
  }
}