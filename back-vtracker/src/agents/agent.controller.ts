import { Request, Response, NextFunction } from 'express';
import { AgentRepository } from './agent.repository.js';
import { Agent } from "./agent.entity.js";

const repository = new AgentRepository();

export function sanitizeAgentInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInputData = {
    name: req.body.name,
    description: req.body.description,
    habilities: req.body.habilities,
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
  const agent = await repository.findOne({ id: req.params.id });
  if (!agent) {
    res.status(404).send({ message: 'Agent not found' });
  } else {
    res.json({ data: agent });
  }
}

export async function add(req: Request, res: Response) {

  const { name, description, habilities } = req.body.sanitizedInputData;
  const ag = new Agent(name, description, habilities);
  const ag_Created = await repository.add(ag);
  return res.status(201).send({ message: 'Agent created', data: ag_Created });
}

export async function update(req: Request, res: Response) {
  const ag_Modified = await repository.update(req.params.id, req.body.sanitizedInputData);

  if (ag_Modified === undefined) {
    return res.status(404).send({ message: 'Agent not found' });
  }
  return res.status(200).send({ message: 'Agent correctly modified', data: ag_Modified });
}

export async function remove(req: Request, res: Response) {
  const ag_Deleted = await repository.delete({ id: req.params.id });

  if (ag_Deleted === undefined) {
    res.status(404).send({ message: 'Agent with this Id does not exist', data: req.params.id });
  } else {
    res.status(200).send({ message: 'Agent succesfully deleted', data: req.params.id });
  }
}