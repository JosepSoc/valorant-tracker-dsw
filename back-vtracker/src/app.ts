import express from 'express';
import { userRouter } from './users/user.routes.js';
import { weaponRouter } from './weapons/weapon.routes.js';
import { agentRouter } from './agents/agent.routes.js';

const app = express();
app.use(express.json());


app.use('/api/users', userRouter);
app.use('/api/agents', agentRouter)
app.use('/api/weapons', weaponRouter);


app.use((_, res) => {
  res.status(404).send({ message: 'Resource not found' });
});

app.listen(5000, () => { console.log(`Server is running on http://localhost:5000`) });
