// src/routes/userRoutes.js
import { createUserController, getUsersController } from '../controllers/userController.js';

const userRoutes = (fastify) => {
  fastify.post('/users', createUserController);
  fastify.get('/users', getUsersController);
};

export default userRoutes;
