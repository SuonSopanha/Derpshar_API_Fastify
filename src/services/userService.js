// src/services/userService.js
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

// Salt rounds for bcrypt (higher value = more security but slower)
const SALT_ROUNDS = 10;

// Hash the password before saving the user
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return await bcrypt.hash(password, salt);
};

// Create a new user
export const createUser = async (data) => {
  // Hash the password before creating the user
  const hashedPassword = await hashPassword(data.password);
  return await User.create({ ...data, password: hashedPassword });
};

// Get all users
export const getAllUsers = async () => {
  return await User.findAll();
};

// Get a user by ID
export const getUserById = async (id) => {
  return await User.findByPk(id);
};

// Get a user by email
export const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

// Update a user by ID
export const updateUserById = async (id, data) => {
  const user = await getUserById(id);
  if (!user) return null;

  // If password is updated, hash it
  if (data.password) {
    data.password = await hashPassword(data.password);
  }

  return await user.update(data);
};

// Delete a user by ID
export const deleteUserById = async (id) => {
  const user = await getUserById(id);
  if (!user) return null;
  await user.destroy();
  return true;
};
