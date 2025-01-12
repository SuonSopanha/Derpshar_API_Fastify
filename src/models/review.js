// src/models/review.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.js';
import User from './userModel.js'; // Adjust the import for your User model
import Product from './product.js'; // Adjust the import for your Product model

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  product_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Product,
      key: 'id',
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'reviews',
  timestamps: false,
});

Review.belongsTo(User, { foreignKey: 'user_id' });
Review.belongsTo(Product, { foreignKey: 'product_id' });

export default Review;
