// src/routes/paymentRoutes.js
import {
    createPaymentController,
    getPaymentsController,
    getPaymentByIdController,
    updatePaymentController,
    deletePaymentController,
  } from '../controllers/paymentController.js';
  
  const paymentRoutes = (fastify) => {
    fastify.post('/payments', createPaymentController); // Create a new payment
    fastify.get('/payments', getPaymentsController); // Get all payments
    fastify.get('/payments/:id', getPaymentByIdController); // Get a single payment by ID
    fastify.put('/payments/:id', updatePaymentController); // Update a payment by ID
    fastify.delete('/payments/:id', deletePaymentController); // Delete a payment by ID
  };
  
  export default paymentRoutes;
  