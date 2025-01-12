// src/controllers/productController.js
import { createProduct, bulkCreateProducts, getAllProducts, getProductById, updateProduct, deleteProduct } from '../services/productService.js';

// Create a new product
export const createProductController = async (req, reply) => {
  try {
    const productData = req.body;
    const newProduct = await createProduct(productData);
    reply.status(201).send(newProduct);
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
};

// Bulk create products
export const bulkCreateProductsController = async (req, reply) => {
  try {
    const productsData = req.body;
    const products = await bulkCreateProducts(productsData);
    reply.status(201).send(products);
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
};

// Get all products
export const getAllProductsController = async (req, reply) => {
  try {
    const products = await getAllProducts();
    reply.status(200).send(products);
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
};

// Get product by ID
export const getProductByIdController = async (req, reply) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    reply.status(200).send(product);
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
};

// Update product by ID
export const updateProductController = async (req, reply) => {
  const { id } = req.params;
  const productData = req.body;
  try {
    const updatedProduct = await updateProduct(id, productData);
    reply.status(200).send(updatedProduct);
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
};

// Delete product by ID
export const deleteProductController = async (req, reply) => {
  const { id } = req.params;
  try {
    const response = await deleteProduct(id);
    reply.status(200).send(response);
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
};
