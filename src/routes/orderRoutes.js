// src/routes/orderRoutes.js
import {
    createOrderController,
    getOrdersController,
    getOrderByIdController,
    updateOrderController,
    deleteOrderController,
  } from '../controllers/orderController.js';
  
  const orderRoutes = (fastify) => {
    fastify.post('/orders', createOrderController); // Create a new order
    fastify.get('/orders', getOrdersController);  // Fetch all orders
    fastify.get('/orders/:id', getOrderByIdController); // Fetch a single order by ID
    fastify.put('/orders/:id', updateOrderController); // Update an order by ID
    fastify.delete('/orders/:id', deleteOrderController); // Delete an order by ID
  };
  
  export default orderRoutes;
  