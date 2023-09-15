import { Router } from 'express';
import { sanitizeUserInput, findAll, findOne, add, update, remove} from './user.controller.js';

export const userRouter = Router();

userRouter.get('/', findAll);

userRouter.get('/:puuid', findOne);

userRouter.post('/', sanitizeUserInput, add);

userRouter.put('/:puuid', sanitizeUserInput, update);

userRouter.patch('/:puuid', sanitizeUserInput, update);

userRouter.delete('/:puuid', remove);