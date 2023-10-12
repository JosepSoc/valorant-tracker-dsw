import { Router } from 'express';
import { sanitizeUserInput, findAll, findOne, add, update, remove} from './weapon.controller.js';

export const weaponRouter = Router();

weaponRouter.get('/', findAll);

weaponRouter.get('/:id', findOne);

weaponRouter.post('/', sanitizeUserInput, add);

weaponRouter.put('/:id', sanitizeUserInput, update);

weaponRouter.patch('/:id', sanitizeUserInput, update);

weaponRouter.delete('/:id', remove);