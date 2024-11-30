// src/services/userService.js
import User from '../models/userModel.js';

const createUser = async (data) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};

export { createUser, getAllUsers };
