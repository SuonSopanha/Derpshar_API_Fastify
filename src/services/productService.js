// src/services/productService.js
import Product from '../models/product.js';

// Create a new product
export const createProduct = async (productData) => {
  try {
    const product = await Product.create(productData);
    return product;
  } catch (err) {
    throw new Error('Error creating product: ' + err.message);
  }
};

// Get all products
export const getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (err) {
    throw new Error('Error fetching products: ' + err.message);
  }
};

// Get a product by ID
export const getProductById = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (err) {
    throw new Error('Error fetching product: ' + err.message);
  }
};

// Update a product by ID
export const updateProduct = async (id, updatedData) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return await product.update(updatedData);
  } catch (err) {
    throw new Error('Error updating product: ' + err.message);
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    await product.destroy();
    return product;
  } catch (err) {
    throw new Error('Error deleting product: ' + err.message);
  }
};
