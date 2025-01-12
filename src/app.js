// src/app.js
import Fastify from 'fastify';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { sequelize } from './sequelize.js';

import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
});

// Register the routes
fastify.register(userRoutes);
fastify.register(productRoutes);
fastify.register(categoryRoutes);
fastify.register(orderRoutes);

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

fastify.register(import("@fastify/cors"), { origin: "*" });

// Register routes
fastify.post('/create-payment-intent', async (request, reply) => {
  try {
    const { amount, currency = 'usd' } = request.body;

    // Create a customer
    const customer = await stripe.customers.create();

    // Create an ephemeral key for the customer
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: '2023-10-16' }
    );

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // amount in cents
      currency: currency,
      customer: customer.id,
      payment_method_types: ['card'],
      metadata: {
        order_id: `order-${Date.now()}`
      }
    });

    // Return the necessary client secret and keys
    return {
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    };
  } catch (error) {
    fastify.log.error(error);
    reply.status(400).send({ error: error.message });
  }
});


// Start the server
async function start() {
  try {
    // Correctly setting the port and host in an options object
    await fastify.listen({ port: 4000, host: '0.0.0.0' }); // 'host' is explicitly set here
    console.log(`Server listening at http://localhost:4000`);

    // Sync the database (create tables if not exist)
    await sequelize.sync();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
