// src/routes/cartRoutes.js
import {
    addToCartController,
    getCartItemsController,
    getCartByUserIdController,
    updateCartItemController,
    deleteCartItemController,
    clearCartByUserIdController,
  } from '../controllers/cartController.js';
  
  const cartRoutes = (fastify) => {
    fastify.post('/cart', addToCartController); // Add an item to the cart
    fastify.get('/cart', getCartItemsController); // Fetch all cart items
    fastify.get('/cart/user/:user_id', getCartByUserIdController); // Fetch cart items by user ID
    fastify.put('/cart/:id', updateCartItemController); // Update a cart item by ID
    fastify.delete('/cart/:id', deleteCartItemController); // Delete a cart item by ID
    fastify.delete('/cart/user/:user_id', clearCartByUserIdController); // Clear the cart for a user
  };
  
  export default cartRoutes;
  