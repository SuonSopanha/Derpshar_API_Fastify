// src/routes/productRoutes.js
import { createProductController, getAllProductsController, getProductByIdController, updateProductController, deleteProductController } from '../controllers/productController.js';

export default async function productRoutes(fastify, options) {
  fastify.post('/products', createProductController); // Create a new product
  fastify.get('/products', getAllProductsController); // Get all products
  fastify.get('/products/:id', getProductByIdController); // Get a product by ID
  fastify.put('/products/:id', updateProductController); // Update a product by ID
  fastify.delete('/products/:id', deleteProductController); // Delete a product by ID
}
