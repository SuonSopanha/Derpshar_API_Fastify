// src/services/productService.js
import Product from '../models/product.js';

// Create a new product
export const createProduct = async (productData) => {
  try {
    const product = await Product.create(productData);
    return product;
  } catch (error) {
    throw new Error('Error creating product: ' + error.message);
  }
};

// Bulk create products
export const bulkCreateProducts = async (productsData) => {
  try {
    const products = await Product.bulkCreate(productsData);
    return products;
  } catch (error) {
    throw new Error('Error bulk creating products: ' + error.message);
  }
};

// Get all products
export const getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error('Error fetching products: ' + error.message);
  }
};

// Get product by ID
export const getProductById = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw new Error('Error fetching product: ' + error.message);
  }
};

// Update product by ID
export const updateProduct = async (id, productData) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    await product.update(productData);
    return product;
  } catch (error) {
    throw new Error('Error updating product: ' + error.message);
  }
};

// Delete product by ID
export const deleteProduct = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    await product.destroy();
    return { message: 'Product deleted successfully' };
  } catch (error) {
    throw new Error('Error deleting product: ' + error.message);
  }
};
