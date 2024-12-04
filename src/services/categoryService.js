// src/services/categoryService.js
import Category from '../models/category.js';

// Create a new category
export const createCategory = async (data) => {
  return await Category.create(data);
};

// Get all categories
export const getAllCategories = async () => {
  return await Category.findAll();
};

// Get a category by ID
export const getCategoryById = async (id) => {
  return await Category.findByPk(id);
};

// Update a category by ID
export const updateCategoryById = async (id, data) => {
  const category = await getCategoryById(id);
  if (!category) return null;
  return await category.update(data);
};

// Delete a category by ID
export const deleteCategoryById = async (id) => {
  const category = await getCategoryById(id);
  if (!category) return null;
  await category.destroy();
  return true;
};
