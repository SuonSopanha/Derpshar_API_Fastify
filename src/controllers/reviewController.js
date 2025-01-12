// src/controllers/reviewController.js
import {
    createReview,
    getAllReviews,
    getReviewById,
    updateReviewById,
    deleteReviewById,
  } from '../services/reviewService.js';
  
  // Create a new review
  export const createReviewController = async (req, reply) => {
    try {
      const { user_id, product_id, rating, comment } = req.body;
      const review = await createReview({ user_id, product_id, rating, comment });
      reply.code(201).send(review);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to create review', details: error.message });
    }
  };
  
  // Get all reviews
  export const getReviewsController = async (req, reply) => {
    try {
      const reviews = await getAllReviews();
      reply.code(200).send(reviews);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch reviews', details: error.message });
    }
  };
  
  // Get a single review by ID
  export const getReviewByIdController = async (req, reply) => {
    try {
      const { id } = req.params;
      const review = await getReviewById(id);
      if (!review) {
        return reply.code(404).send({ error: 'Review not found' });
      }
      reply.code(200).send(review);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to fetch review', details: error.message });
    }
  };
  
  // Update a review by ID
  export const updateReviewController = async (req, reply) => {
    try {
      const { id } = req.params;
      const { rating, comment } = req.body;
      const updatedReview = await updateReviewById(id, { rating, comment });
      if (!updatedReview) {
        return reply.code(404).send({ error: 'Review not found' });
      }
      reply.code(200).send(updatedReview);
    } catch (error) {
      reply.code(500).send({ error: 'Failed to update review', details: error.message });
    }
  };
  
  // Delete a review by ID
  export const deleteReviewController = async (req, reply) => {
    try {
      const { id } = req.params;
      const isDeleted = await deleteReviewById(id);
      if (!isDeleted) {
        return reply.code(404).send({ error: 'Review not found' });
      }
      reply.code(204).send();
    } catch (error) {
      reply.code(500).send({ error: 'Failed to delete review', details: error.message });
    }
  };
  