// src/routes/productRoutes.js
import { createProductController, bulkCreateProductsController, getAllProductsController, getProductByIdController, updateProductController, deleteProductController } from '../controllers/productController.js';

const productRoutes = async (fastify) => {
  fastify.post('/products', createProductController); // Create a new product
  fastify.post('/products/bulk', bulkCreateProductsController); // Bulk create products
  fastify.get('/products', getAllProductsController); // Get all products
  fastify.get('/products/:id', getProductByIdController); // Get product by ID
  fastify.put('/products/:id', updateProductController); // Update product by ID
  fastify.delete('/products/:id', deleteProductController); // Delete product by ID
};

export default productRoutes;
