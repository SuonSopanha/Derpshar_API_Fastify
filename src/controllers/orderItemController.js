// src/controllers/orderItemController.js
import {
    createOrderItem,
    getAllOrderItems,
    getOrderItemById,
    getOrderItemsByOrderId,
    updateOrderItemById,
    deleteOrderItemById,
  } from '../services/orderItemService.js';
  
  // Create a new order item
  export const createOrderItemController = async (req, reply) => {
    try {
      const { order_id, product_id, quantity, price } = req.body;
      const orderItem = await createOrderItem({ order_id, product_id, quantity, price });
      reply.code(201).send(orderItem);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to create order item', details: error.message });
    }
  };
  
  // Get all order items
  export const getOrderItemsController = async (req, reply) => {
    try {
      const orderItems = await getAllOrderItems();
      reply.code(200).send(orderItems);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch order items', details: error.message });
    }
  };
  
  // Get a single order item by ID
  export const getOrderItemByIdController = async (req, reply) => {
    try {
      const { id } = req.params;
      const orderItem = await getOrderItemById(id);
      if (!orderItem) {
        return reply.code(404).send({ error: 'Order item not found' });
      }
      reply.code(200).send(orderItem);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch order item', details: error.message });
    }
  };
  
  // Get all order items for a specific order
  export const getOrderItemsByOrderIdController = async (req, reply) => {
    try {
      const { order_id } = req.params;
      const orderItems = await getOrderItemsByOrderId(order_id);
      reply.code(200).send(orderItems);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch order items for the order', details: error.message });
    }
  };
  
  // Update an order item by ID
  export const updateOrderItemController = async (req, reply) => {
    try {
      const { id } = req.params;
      const { quantity, price } = req.body;
      const updatedOrderItem = await updateOrderItemById(id, { quantity, price });
      if (!updatedOrderItem) {
        return reply.code(404).send({ error: 'Order item not found' });
      }
      reply.code(200).send(updatedOrderItem);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to update order item', details: error.message });
    }
  };
  
  // Delete an order item by ID
  export const deleteOrderItemController = async (req, reply) => {
    try {
      const { id } = req.params;
      const isDeleted = await deleteOrderItemById(id);
      if (!isDeleted) {
        return reply.code(404).send({ error: 'Order item not found' });
      }
      reply.code(204).send();
    } catch (error) {
      reply.code(500).send({ error: 'Failed to delete order item', details: error.message });
    }
  };
  