import { Request, Response, NextFunction } from 'express';
import { AbilitiesRepository } from './abilities.repository.js';
import { Ability } from "./abilities.entity.js";

const repository = new AbilitiesRepository();

export function sanitizeAbilityInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInputData = {
    name: req.body.name,
    description: req.body.description,
    actionKey: req.body.actionKey,
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
  const ability = await repository.findOne({ id: req.params.id });
  if (!ability) {
    res.status(404).send({ message: 'Ability not found' });
  } else {
    res.json({ data: ability });
  }
}

export async function add(req: Request, res: Response) {

  const { name, description, actionKey } = req.body.sanitizedInputData;
  const ab = new Ability(name, description, actionKey);
  const ab_Created = await repository.add(ab);
  return res.status(201).send({ message: 'Ability created', data: ab_Created });
}

export async function update(req: Request, res: Response) {
  const ab_Modified = await repository.update(req.params.id, req.body.sanitizedInputData);

  if (ab_Modified === undefined) {
    return res.status(404).send({ message: 'Ability not found' });
  }
  return res.status(200).send({ message: 'Ability correctly modified', data: ab_Modified });
}

export async function remove(req: Request, res: Response) {
  const ab_Deleted = await repository.delete({ id: req.params.id });

  if (ab_Deleted === undefined) {
    res.status(404).send({ message: 'Ability with this Id does not exist', data: req.params.id });
  } else {
    res.status(200).send({ message: 'Ability succesfully deleted', data: req.params.id });
  }
}