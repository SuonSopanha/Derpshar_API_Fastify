// src/services/orderService.js
import Order from '../models/order.js';

// Create a new order
export const createOrder = async (data) => {
  return await Order.create(data);
};

// Get all orders
export const getAllOrders = async () => {
  return await Order.findAll();
};

// Get an order by ID
export const getOrderById = async (id) => {
  return await Order.findByPk(id);
};

// Update an order by ID
export const updateOrderById = async (id, data) => {
  const order = await getOrderById(id);
  if (!order) return null;
  return await order.update(data);
};

// Delete an order by ID
export const deleteOrderById = async (id) => {
  const order = await getOrderById(id);
  if (!order) return null;
  await order.destroy();
  return true;
};
