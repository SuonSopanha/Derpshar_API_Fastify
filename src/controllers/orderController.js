// src/controllers/orderController.js
import {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrderById,
    deleteOrderById,
  } from '../services/orderService.js';
  
  // Create a new order
  export const createOrderController = async (req, reply) => {
    try {
      const { user_id, status, total_amount } = req.body;
      const order = await createOrder({ user_id, status, total_amount });
      reply.code(201).send(order);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to create order', details: error.message });
    }
  };
  
  // Get all orders
  export const getOrdersController = async (req, reply) => {
    try {
      const orders = await getAllOrders();
      reply.code(200).send(orders);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch orders', details: error.message });
    }
  };
  
  // Get a single order by ID
  export const getOrderByIdController = async (req, reply) => {
    try {
      const { id } = req.params;
      const order = await getOrderById(id);
      if (!order) {
        return reply.code(404).send({ error: 'Order not found' });
      }
      reply.code(200).send(order);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch order', details: error.message });
    }
  };
  
  // Update an order by ID
  export const updateOrderController = async (req, reply) => {
    try {
      const { id } = req.params;
      const { status, total_amount } = req.body;
      const updatedOrder = await updateOrderById(id, { status, total_amount });
      if (!updatedOrder) {
        return reply.code(404).send({ error: 'Order not found' });
      }
      reply.code(200).send(updatedOrder);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to update order', details: error.message });
    }
  };
  
  // Delete an order by ID
  export const deleteOrderController = async (req, reply) => {
    try {
      const { id } = req.params;
      const isDeleted = await deleteOrderById(id);
      if (!isDeleted) {
        return reply.code(404).send({ error: 'Order not found' });
      }
      reply.code(204).send();
    } catch (error) {
      reply.code(500).send({ error: 'Failed to delete order', details: error.message });
    }
  };
  