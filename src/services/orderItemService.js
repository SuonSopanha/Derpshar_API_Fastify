// src/services/orderItemService.js
import OrderItem from '../models/orderItem.js';

// Create a new order item
export const createOrderItem = async (data) => {
  return await OrderItem.create(data);
};

// Get all order items
export const getAllOrderItems = async () => {
  return await OrderItem.findAll();
};

// Get an order item by ID
export const getOrderItemById = async (id) => {
  return await OrderItem.findByPk(id);
};

// Get all order items for a specific order
export const getOrderItemsByOrderId = async (orderId) => {
  return await OrderItem.findAll({
    where: { order_id: orderId },
  });
};

// Update an order item by ID
export const updateOrderItemById = async (id, data) => {
  const orderItem = await getOrderItemById(id);
  if (!orderItem) return null;
  return await orderItem.update(data);
};

// Delete an order item by ID
export const deleteOrderItemById = async (id) => {
  const orderItem = await getOrderItemById(id);
  if (!orderItem) return null;
  await orderItem.destroy();
  return true;
};
