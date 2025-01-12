// src/models/payment.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize.js';
import Order from './order.js'; // Adjust the import if your order model is named differently

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  order_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Order,
      key: 'id',
    },
  },
  payment_method: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending',
  },
  transaction_id: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'payments',
  timestamps: false,
});

Payment.belongsTo(Order, { foreignKey: 'order_id' });

export default Payment;
