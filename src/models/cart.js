// src/models/cart.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.js';
import User from './userModel.js'; // Assuming User model exists
import Product from './product.js'; // Assuming Product model exists

const Cart = sequelize.define('Cart', {
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
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'carts',
  timestamps: false,
});

Cart.belongsTo(User, { foreignKey: 'user_id' });
Cart.belongsTo(Product, { foreignKey: 'product_id' });

export default Cart;
