// src/services/paymentService.js
import Payment from '../models/payment.js';

// Create a new payment
export const createPayment = async (data) => {
  return await Payment.create(data);
};

// Get all payments
export const getAllPayments = async () => {
  return await Payment.findAll();
};

// Get a payment by ID
export const getPaymentById = async (id) => {
  return await Payment.findByPk(id);
};

// Update a payment by ID
export const updatePaymentById = async (id, data) => {
  const payment = await getPaymentById(id);
  if (!payment) return null;
  return await payment.update(data);
};

// Delete a payment by ID
export const deletePaymentById = async (id) => {
  const payment = await getPaymentById(id);
  if (!payment) return null;
  await payment.destroy();
  return true;
};
