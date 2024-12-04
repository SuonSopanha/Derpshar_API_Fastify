// src/routes/categoryRoutes.js
import {
    createCategoryController,
    getCategoriesController,
    getCategoryByIdController,
    updateCategoryController,
    deleteCategoryController,
  } from '../controllers/categoryController.js';
  
  const categoryRoutes = (fastify) => {
    fastify.post('/categories', createCategoryController); // Create a new category
    fastify.get('/categories', getCategoriesController);  // Fetch all categories
    fastify.get('/categories/:id', getCategoryByIdController); // Fetch a single category by ID
    fastify.put('/categories/:id', updateCategoryController); // Update a category by ID
    fastify.delete('/categories/:id', deleteCategoryController); // Delete a category by ID
  };
  
  export default categoryRoutes;
  