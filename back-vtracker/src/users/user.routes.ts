import { Router } from 'express';
import { sanitizeUserInput, findAll, findOne, add, update, remove} from './user.controller.js';

export const userRouter = Router();

userRouter.get('/', findAll);
userRouter.get('/:id', findOne);

//post: creation of resources
//--post /api/characters/ -> create a new character
userRouter.post('/', sanitizeUserInput, add);

//put/patch: update/modify resources
//The main difference between put and patch by API REST standarts is that put has to be idempotent (if you call it twice it will have the same result)
//Patch in the other hand can be idempotent but it is not necessary; in general patch is used to update a part of the resource, put is used to update the whole resource
userRouter.put('/:id', sanitizeUserInput, update);

//Patch is used to update a part of the resource 
userRouter.patch('/:id', sanitizeUserInput, update);

//delete: delete resources
userRouter.delete('/:id', remove);