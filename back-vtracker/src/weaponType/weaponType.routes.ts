import { Router } from 'express';
import { sanitizeUserInput, findAll, findOne, add, update, remove} from './weaponType.controller.js';

export const weaponTypeRouter = Router();

weaponTypeRouter.get('/', findAll);

weaponTypeRouter.get('/:id', findOne);

weaponTypeRouter.post('/', sanitizeUserInput, add);

weaponTypeRouter.put('/:id', sanitizeUserInput, update);

weaponTypeRouter.patch('/:id', sanitizeUserInput, update);

weaponTypeRouter.delete('/:id', remove);