import { Request, Response, NextFunction } from 'express';
import { WeaponTypeRepository } from './weaponType.repository.js';
import { WeaponType } from './weaponType.entity.js';

const repository = new WeaponTypeRepository();

export function sanitizeUserInput(req: Request, res:Response, next:NextFunction){
  req.body.sanitizedInputData = {
    cod_weapon_type: req.body.cod_weapon_type,
    description: req.body.description,
    //weapon_name: req.body.weapon_name,
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
  const weaponType = await repository.findOne( {id: req.params.id} );
  if(!weaponType){
    res.status(404).send({message:'WeaponType not found'});
  }else{
    res.json({data:weaponType});
  }
}

export async function add(req: Request, res: Response){
  
  const {cod_weapon_type, description}=req.body.sanitizedInputData;
  const wt = new WeaponType(cod_weapon_type, description);
  const wt_Created=await repository.add(wt);
  return res.status(201).send({message:'WeaponType created', data: wt_Created});
}

export async function update(req: Request, res: Response){
  const wt_Modified = await repository.update(req.params.id, req.body.sanitizedInputData);
  
  if(wt_Modified === undefined){
    return res.status(404).send({message:'WeaponType not found'});
  }
  return res.status(200).send({message:'WeaponType correctly modified', data: wt_Modified});
}

export async function remove(req: Request, res: Response){
  const wt_Deleted = await repository.delete( {id: req.params.id} );

  if(wt_Deleted===undefined){
    res.status(404).send({message:'WeaponType with this oId does not exist', data: req.params.id});
  } else{
    res.status(200).send({message:'WeaponType succesfully deleted', data: req.params.id});
  }
}