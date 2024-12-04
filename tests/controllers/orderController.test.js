const Fastify = require('fastify');
const OrderRoutes = require('../../src/routes/orderRoutes'); // Adjust the path as needed
const OrderService = require('../../src/services/orderService'); // Adjust path for service
const supertest = require('supertest');

jest.mock('../../src/services/orderService.js'); // Mock the Order service

const fastify = Fastify();
OrderRoutes(fastify);

describe('Order Controller', () => {
  afterAll(() => fastify.close());

  it('should create a new order', async () => {
    const mockOrder = { id: '1', user_id: '123', status: 'pending', total_amount: 100.00 };
    OrderService.createOrder.mockResolvedValue(mockOrder);

    const response = await supertest(fastify.server)
      .post('/orders')
      .send({ user_id: '123', status: 'pending', total_amount: 100.00 });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockOrder);
    expect(OrderService.createOrder).toHaveBeenCalledWith({
      user_id: '123',
      status: 'pending',
      total_amount: 100.00,
    });
  });

  it('should fetch all orders', async () => {
    const mockOrders = [{ id: '1', user_id: '123', status: 'pending', total_amount: 100.00 }];
    OrderService.getAllOrders.mockResolvedValue(mockOrders);

    const response = await supertest(fastify.server).get('/orders');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockOrders);
    expect(OrderService.getAllOrders).toHaveBeenCalled();
  });

  it('should fetch an order by ID', async () => {
    const mockOrder = { id: '1', user_id: '123', status: 'pending', total_amount: 100.00 };
    OrderService.getOrderById.mockResolvedValue(mockOrder);

    const response = await supertest(fastify.server).get('/orders/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockOrder);
    expect(OrderService.getOrderById).toHaveBeenCalledWith('1');
  });

  it('should update an order by ID', async () => {
    const mockOrder = { id: '1', user_id: '123', status: 'shipped', total_amount: 100.00 };
    OrderService.updateOrderById.mockResolvedValue(mockOrder);

    const response = await supertest(fastify.server)
      .put('/orders/1')
      .send({ status: 'shipped' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockOrder);
    expect(OrderService.updateOrderById).toHaveBeenCalledWith('1', { status: 'shipped' });
  });

  it('should delete an order by ID', async () => {
    OrderService.deleteOrderById.mockResolvedValue(true);

    const response = await supertest(fastify.server).delete('/orders/1');

    expect(response.status).toBe(204);
    expect(OrderService.deleteOrderById).toHaveBeenCalledWith('1');
  });
});
