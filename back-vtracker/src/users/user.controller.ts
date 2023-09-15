import { Request, Response, NextFunction } from 'express';
import { UserRepository } from './user.repository.js';
import { User } from "./user.entity.js";

const repository = new UserRepository();

export function sanitizeUserInput(req: Request, res:Response, next:NextFunction){
  req.body.sanitizedInputData = {
    puuid: req.body.puuid,
    name_lastname: req.body.name_lastname,
    email: req.body.email,
    crosshair: req.body.crosshair,
    password: req.body.password,
    //agents: req.body.agents,
  }

  Object.keys(req.body.sanitizedInputData).forEach((key) => {
    if(req.body.sanitizedInputData[key] === undefined){
      delete req.body.sanitizedInputData[key];
    }
  });

  next(); 
}


export function findAll(req: Request, res: Response){
  res.json({ data: repository.findAll() });
}

export function findOne(req: Request, res: Response){
  const user = repository.findOne( {id: req.params.puuid} );
  if(!user){
    res.status(404).send({message:'User not found'});
  }else{
    res.json({data:user});
  }
}

export function add(req: Request, res: Response){
  
  const {puuid, name_lastname, email, crosshair, password}=req.body.sanitizedInputData;
  const u = new User(puuid, name_lastname, email, crosshair, password);
  const u_Created=repository.add(u);
  return res.status(201).send({message:'User created', data: u_Created});
}

export function update(req: Request, res: Response){
  req.body.sanitizedInputData.puuid=req.params.puuid;
  const u_Modified = repository.update(req.body.sanitizedInputData);
  
  if(u_Modified === undefined){
    return res.status(404).send({message:'User not found'});
  }
  return res.status(200).send({message:'User correctly modified', data: u_Modified});
}

export function remove(req: Request, res: Response){
  const u_Deleted = repository.delete( {id: req.params.puuid} );

  if(u_Deleted===undefined){
    res.status(404).send({message:'User with this PUUID does not exist', data: req.params.puuid});
  } else{
    res.status(200).send({message:'User succesfully deleted', data: u_Deleted.puuid});
  }
}