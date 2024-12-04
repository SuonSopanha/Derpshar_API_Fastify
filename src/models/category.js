// src/models/category.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.js'; // Make sure this points to your Sequelize instance

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true, // Automatically creates createdAt and updatedAt fields
});

export default Category;
