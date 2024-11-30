// src/controllers/userController.js
import * as userService from '../services/userService.js';

const createUserController = async (request, reply) => {
  const { name, email } = request.body;
  try {
    const user = await userService.createUser({ name, email });
    return reply.status(201).send(user);
  } catch (error) {
    reply.status(400).send({ error: error.message });
  }
};

const getUsersController = async (request, reply) => {
  try {
    const users = await userService.getAllUsers();
    return reply.send(users);
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
};

export { createUserController, getUsersController };
