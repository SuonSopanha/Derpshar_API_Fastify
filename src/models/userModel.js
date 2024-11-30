// src/models/userModel.js
import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.js';

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default User;
