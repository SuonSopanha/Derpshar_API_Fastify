// src/controllers/userController.js
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../services/userService.js';

// Create a new user
export const createUserController = async (req, reply) => {
  try {
    const { name, email, password, phone_number, address, role } = req.body;
    const user = await createUser({ name, email, password, phone_number, address, role });
    reply.code(201).send(user);
  } catch (error) {
    reply.code(500).send({ error: 'Failed to create user', details: error.message });
  }
};

// Get all users
export const getUsersController = async (req, reply) => {
  try {
    const users = await getAllUsers();
    reply.code(200).send(users);
  } catch (error) {
    reply.code(500).send({ error: 'Failed to fetch users', details: error.message });
  }
};

// Get a single user by ID
export const getUserByIdController = async (req, reply) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) {
      return reply.code(404).send({ error: 'User not found' });
    }
    reply.code(200).send(user);
  } catch (error) {
    reply.code(500).send({ error: 'Failed to fetch user', details: error.message });
  }
};

// Update a user by ID
export const updateUserController = async (req, reply) => {
  try {
    const { id } = req.params;
    const { name, email, password, phone_number, address, role } = req.body;
    const updatedUser = await updateUserById(id, { name, email, password, phone_number, address, role });
    if (!updatedUser) {
      return reply.code(404).send({ error: 'User not found' });
    }
    reply.code(200).send(updatedUser);
  } catch (error) {
    reply.code(500).send({ error: 'Failed to update user', details: error.message });
  }
};

// Delete a user by ID
export const deleteUserController = async (req, reply) => {
  try {
    const { id } = req.params;
    const isDeleted = await deleteUserById(id);
    if (!isDeleted) {
      return reply.code(404).send({ error: 'User not found' });
    }
    reply.code(204).send();
  } catch (error) {
    reply.code(500).send({ error: 'Failed to delete user', details: error.message });
  }
};
