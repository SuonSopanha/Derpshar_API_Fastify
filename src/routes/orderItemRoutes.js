// src/routes/orderItemRoutes.js
import {
    createOrderItemController,
    getOrderItemsController,
    getOrderItemByIdController,
    getOrderItemsByOrderIdController,
    updateOrderItemController,
    deleteOrderItemController,
  } from '../controllers/orderItemController.js';
  
  const orderItemRoutes = (fastify) => {
    fastify.post('/order-items', createOrderItemController); // Create a new order item
    fastify.get('/order-items', getOrderItemsController); // Fetch all order items
    fastify.get('/order-items/:id', getOrderItemByIdController); // Fetch a single order item by ID
    fastify.get('/order-items/order/:order_id', getOrderItemsByOrderIdController); // Fetch all items for a specific order
    fastify.put('/order-items/:id', updateOrderItemController); // Update an order item by ID
    fastify.delete('/order-items/:id', deleteOrderItemController); // Delete an order item by ID
  };
  
  export default orderItemRoutes;
  