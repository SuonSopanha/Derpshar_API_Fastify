// src/services/cartService.js
import Cart from '../models/cart.js';

// Add an item to the cart
export const addToCart = async (data) => {
  return await Cart.create(data);
};

// Get all cart items
export const getAllCartItems = async () => {
  return await Cart.findAll();
};

// Get cart items by user ID
export const getCartByUserId = async (user_id) => {
  return await Cart.findAll({ where: { user_id } });
};

// Update a cart item by ID
export const updateCartItem = async (id, data) => {
  const cartItem = await Cart.findByPk(id);
  if (!cartItem) return null;
  return await cartItem.update(data);
};

// Delete a cart item by ID
export const deleteCartItem = async (id) => {
  const cartItem = await Cart.findByPk(id);
  if (!cartItem) return null;
  await cartItem.destroy();
  return true;
};

// Clear the cart for a user
export const clearCartByUserId = async (user_id) => {
  return await Cart.destroy({ where: { user_id } });
};
