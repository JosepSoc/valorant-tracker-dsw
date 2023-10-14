import { Router } from 'express';
import { sanitizeAgentInput, findAll, findOne, add, update, remove } from './agent.controller.js';

export const agentRouter = Router();

agentRouter.get('/', findAll);

agentRouter.get('/:id', findOne);

agentRouter.post('/', sanitizeAgentInput, add);

agentRouter.put('/:id', sanitizeAgentInput, update);

agentRouter.patch('/:id', sanitizeAgentInput, update);

agentRouter.delete('/:id', remove);