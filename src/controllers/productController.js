// src/controllers/productController.js
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../services/productService.js';

// Controller to create a product
export const createProductController = async (request, reply) => {
  const { name, description, price, stock } = request.body;
  
  try {
    const product = await createProduct({ name, description, price, stock });
    reply.status(201).send(product);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
};

// Controller to get all products
export const getAllProductsController = async (request, reply) => {
  try {
    const products = await getAllProducts();
    reply.status(200).send(products);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
};

// Controller to get a product by ID
export const getProductByIdController = async (request, reply) => {
  const { id } = request.params;
  
  try {
    const product = await getProductById(id);
    reply.status(200).send(product);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
};

// Controller to update a product
export const updateProductController = async (request, reply) => {
  const { id } = request.params;
  const updatedData = request.body;
  
  try {
    const product = await updateProduct(id, updatedData);
    reply.status(200).send(product);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
};

// Controller to delete a product
export const deleteProductController = async (request, reply) => {
  const { id } = request.params;
  
  try {
    const product = await deleteProduct(id);
    reply.status(200).send({ message: 'Product deleted', product });
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
};
