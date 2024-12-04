// src/controllers/categoryController.js
import {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
  } from '../services/categoryService.js';
  
  // Create a new category
  export const createCategoryController = async (req, reply) => {
    try {
      const { name, description } = req.body;
      const category = await createCategory({ name, description });
      reply.code(201).send(category);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to create category', details: error.message });
    }
  };
  
  // Get all categories
  export const getCategoriesController = async (req, reply) => {
    try {
      const categories = await getAllCategories();
      reply.code(200).send(categories);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch categories', details: error.message });
    }
  };
  
  // Get a single category by ID
  export const getCategoryByIdController = async (req, reply) => {
    try {
      const { id } = req.params;
      const category = await getCategoryById(id);
      if (!category) {
        return reply.code(404).send({ error: 'Category not found' });
      }
      reply.code(200).send(category);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch category', details: error.message });
    }
  };
  
  // Update a category by ID
  export const updateCategoryController = async (req, reply) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const updatedCategory = await updateCategoryById(id, { name, description });
      if (!updatedCategory) {
        return reply.code(404).send({ error: 'Category not found' });
      }
      reply.code(200).send(updatedCategory);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to update category', details: error.message });
    }
  };
  
  // Delete a category by ID
  export const deleteCategoryController = async (req, reply) => {
    try {
      const { id } = req.params;
      const isDeleted = await deleteCategoryById(id);
      if (!isDeleted) {
        return reply.code(404).send({ error: 'Category not found' });
      }
      reply.code(204).send();
    } catch (error) {
      reply.code(500).send({ error: 'Failed to delete category', details: error.message });
    }
  };
  