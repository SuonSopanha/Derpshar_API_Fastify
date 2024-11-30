// src/app.js
import Fastify from 'fastify';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import { sequelize } from './sequelize.js';

const fastify = Fastify({
  logger: true,
});

// Register the routes
fastify.register(userRoutes);
fastify.register(productRoutes);

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
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
