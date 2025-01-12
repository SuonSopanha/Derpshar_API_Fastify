// src/routes/reviewRoutes.js
import {
    createReviewController,
    getReviewsController,
    getReviewByIdController,
    updateReviewController,
    deleteReviewController,
  } from '../controllers/reviewController.js';
  
  const reviewRoutes = (fastify) => {
    fastify.post('/reviews', createReviewController); // Create a new review
    fastify.get('/reviews', getReviewsController); // Get all reviews
    fastify.get('/reviews/:id', getReviewByIdController); // Get a single review by ID
    fastify.put('/reviews/:id', updateReviewController); // Update a review by ID
    fastify.delete('/reviews/:id', deleteReviewController); // Delete a review by ID
  };
  
  export default reviewRoutes;
  