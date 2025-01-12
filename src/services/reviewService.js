// src/services/reviewService.js
import Review from '../models/review.js';

// Create a new review
export const createReview = async (data) => {
  return await Review.create(data);
};

// Get all reviews
export const getAllReviews = async () => {
  return await Review.findAll({
    include: ['User', 'Product'], // Include associations if needed
  });
};

// Get a review by ID
export const getReviewById = async (id) => {
  return await Review.findByPk(id);
};

// Update a review by ID
export const updateReviewById = async (id, data) => {
  const review = await getReviewById(id);
  if (!review) return null;
  return await review.update(data);
};

// Delete a review by ID
export const deleteReviewById = async (id) => {
  const review = await getReviewById(id);
  if (!review) return null;
  await review.destroy();
  return true;
};
