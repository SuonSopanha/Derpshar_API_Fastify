// src/models/product.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.js';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true
  },
  model_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  asin: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false
  },
  initial_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  final_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  currency: {
    type: DataTypes.CHAR(3),
    allowNull: true
  },
  discount: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  rating: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: true
  },
  reviews_count: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  availability: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  date_first_available: {
    type: DataTypes.STRING,
    allowNull: true
  },
  product_dimensions: {
    type: DataTypes.STRING,
    allowNull: true
  },
  weight: {
    type: DataTypes.STRING,
    allowNull: true
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: true
  },
  category: {
    type: DataTypes.JSON, // Use JSON type to store arrays as JSON strings
    allowNull: true
  },
  images: {
    type: DataTypes.JSON, // Use JSON type to store arrays as JSON strings
    allowNull: true
  },
  product_details: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'products',
  timestamps: true,
  underscored: true
});

export default Product;