// src/controllers/paymentController.js
import {
    createPayment,
    getAllPayments,
    getPaymentById,
    updatePaymentById,
    deletePaymentById,
  } from '../services/paymentService.js';
  
  // Create a new payment
  export const createPaymentController = async (req, reply) => {
    try {
      const { order_id, payment_method, status, transaction_id } = req.body;
      const payment = await createPayment({ order_id, payment_method, status, transaction_id });
      reply.code(201).send(payment);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to create payment', details: error.message });
    }
  };
  
  // Get all payments
  export const getPaymentsController = async (req, reply) => {
    try {
      const payments = await getAllPayments();
      reply.code(200).send(payments);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch payments', details: error.message });
    }
  };
  
  // Get a single payment by ID
  export const getPaymentByIdController = async (req, reply) => {
    try {
      const { id } = req.params;
      const payment = await getPaymentById(id);
      if (!payment) {
        return reply.code(404).send({ error: 'Payment not found' });
      }
      reply.code(200).send(payment);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch payment', details: error.message });
    }
  };
  
  // Update a payment by ID
  export const updatePaymentController = async (req, reply) => {
    try {
      const { id } = req.params;
      const { payment_method, status, transaction_id } = req.body;
      const updatedPayment = await updatePaymentById(id, { payment_method, status, transaction_id });
      if (!updatedPayment) {
        return reply.code(404).send({ error: 'Payment not found' });
      }
      reply.code(200).send(updatedPayment);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to update payment', details: error.message });
    }
  };
  
  // Delete a payment by ID
  export const deletePaymentController = async (req, reply) => {
    try {
      const { id } = req.params;
      const isDeleted = await deletePaymentById(id);
      if (!isDeleted) {
        return reply.code(404).send({ error: 'Payment not found' });
      }
      reply.code(204).send();
    } catch (error) {
      reply.code(500).send({ error: 'Failed to delete payment', details: error.message });
    }
  };
  