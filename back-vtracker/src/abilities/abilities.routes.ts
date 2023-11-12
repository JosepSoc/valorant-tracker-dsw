import { Router } from 'express';
import { sanitizeAbilityInput, findAll, findOne, add, update, remove } from './abilities.controller.js';

export const abilityRouter = Router();

abilityRouter.get('/', findAll);

abilityRouter.get('/:id', findOne);

abilityRouter.post('/', sanitizeAbilityInput, add);

abilityRouter.put('/:id', sanitizeAbilityInput, update);

abilityRouter.patch('/:id', sanitizeAbilityInput, update);

abilityRouter.delete('/:id', remove);