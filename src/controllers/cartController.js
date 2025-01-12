// src/controllers/cartController.js
import {
    addToCart,
    getAllCartItems,
    getCartByUserId,
    updateCartItem,
    deleteCartItem,
    clearCartByUserId,
  } from '../services/cartService.js';
  
  // Add an item to the cart
  export const addToCartController = async (req, reply) => {
    try {
      const { user_id, product_id, quantity } = req.body;
      const cartItem = await addToCart({ user_id, product_id, quantity });
      reply.code(201).send(cartItem);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to add item to cart', details: error.message });
    }
  };
  
  // Get all cart items
  export const getCartItemsController = async (req, reply) => {
    try {
      const cartItems = await getAllCartItems();
      reply.code(200).send(cartItems);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch cart items', details: error.message });
    }
  };
  
  // Get cart items by user ID
  export const getCartByUserIdController = async (req, reply) => {
    try {
      const { user_id } = req.params;
      const cartItems = await getCartByUserId(user_id);
      if (cartItems.length === 0) {
        return reply.code(404).send({ error: 'No cart items found for this user' });
      }
      reply.code(200).send(cartItems);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch user cart items', details: error.message });
    }
  };
  
  // Update a cart item by ID
  export const updateCartItemController = async (req, reply) => {
    try {
      const { id } = req.params;
      const { quantity } = req.body;
      const updatedCartItem = await updateCartItem(id, { quantity });
      if (!updatedCartItem) {
        return reply.code(404).send({ error: 'Cart item not found' });
      }
      reply.code(200).send(updatedCartItem);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to update cart item', details: error.message });
    }
  };
  
  // Delete a cart item by ID
  export const deleteCartItemController = async (req, reply) => {
    try {
      const { id } = req.params;
      const isDeleted = await deleteCartItem(id);
      if (!isDeleted) {
        return reply.code(404).send({ error: 'Cart item not found' });
      }
      reply.code(204).send();
    } catch (error) {
      reply.code(500).send({ error: 'Failed to delete cart item', details: error.message });
    }
  };
  
  // Clear the cart for a user
  export const clearCartByUserIdController = async (req, reply) => {
    try {
      const { user_id } = req.params;
      const cleared = await clearCartByUserId(user_id);
      if (!cleared) {
        return reply.code(404).send({ error: 'No cart items found for this user' });
      }
      reply.code(204).send();
    } catch (error) {
      reply.code(500).send({ error: 'Failed to clear cart', details: error.message });
    }
  };
  