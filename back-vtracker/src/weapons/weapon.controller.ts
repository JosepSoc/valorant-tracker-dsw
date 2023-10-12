import { Request, Response, NextFunction } from 'express';
import { WeaponRepository } from './weapon.repository.js';
import { Weapon } from './weapon.entity.js';

const repository = new WeaponRepository();

export function sanitizeUserInput(req: Request, res:Response, next:NextFunction){
  req.body.sanitizedInputData = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    //tipo: req.body.tipo,
  }

  Object.keys(req.body.sanitizedInputData).forEach((key) => {
    if(req.body.sanitizedInputData[key] === undefined){
      delete req.body.sanitizedInputData[key];
    }
  });

  next(); 
}

export async function findAll(req: Request, res: Response){
  res.json({ data: await repository.findAll() });
}

export async function findOne(req: Request, res: Response){
  const weapon = await repository.findOne( {id: req.params.name} );
  if(!weapon){
    res.status(404).send({message:'Weapon not found'});
  }else{
    res.json({data:weapon});
  }
}

export async function add(req: Request, res: Response){
  
  const {name, description}=req.body.sanitizedInputData;
  const w = new Weapon(name, description);
  const w_Created=await repository.add(w);
  return res.status(201).send({message:'Weapon created', data: w_Created});
}

export async function update(req: Request, res: Response){
  console.log(req.params.id);
  const w_Modified = await repository.update(req.params.id, req.body.sanitizedInputData);
  
  if(w_Modified === undefined){
    return res.status(404).send({message:'Weapon not found'});
  }
  return res.status(200).send({message:'Weapon correctly modified', data: w_Modified});
}

export async function remove(req: Request, res: Response){
  const w_Deleted = await repository.delete( {id: req.params.id} );

  if(w_Deleted===undefined){
    res.status(404).send({message:'Weapon with this oId does not exist', data: req.params.id});
  } else{
    res.status(200).send({message:'Weapon succesfully deleted', data: req.params.id});
  }
}