const OrderService = require('../../src/services/orderService');
const Order = require('../../src/models/order');

jest.mock('../../src/models/order.js'); // Mock the Order model

describe('Order Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new order', async () => {
    const mockOrder = { id: '1', user_id: '123', status: 'pending', total_amount: 100.00 };
    Order.create.mockResolvedValue(mockOrder);

    const result = await OrderService.createOrder(mockOrder);
    expect(Order.create).toHaveBeenCalledWith(mockOrder);
    expect(result).toEqual(mockOrder);
  });

  it('should fetch all orders', async () => {
    const mockOrders = [{ id: '1', user_id: '123', status: 'pending', total_amount: 100.00 }];
    Order.findAll.mockResolvedValue(mockOrders);

    const result = await OrderService.getAllOrders();
    expect(Order.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockOrders);
  });

  it('should fetch an order by ID', async () => {
    const mockOrder = { id: '1', user_id: '123', status: 'pending', total_amount: 100.00 };
    Order.findByPk.mockResolvedValue(mockOrder);

    const result = await OrderService.getOrderById('1');
    expect(Order.findByPk).toHaveBeenCalledWith('1');
    expect(result).toEqual(mockOrder);
  });

  it('should update an order by ID', async () => {
    const mockOrder = { update: jest.fn().mockResolvedValue(true) };
    Order.findByPk.mockResolvedValue(mockOrder);

    const result = await OrderService.updateOrderById('1', { status: 'shipped' });
    expect(Order.findByPk).toHaveBeenCalledWith('1');
    expect(mockOrder.update).toHaveBeenCalledWith({ status: 'shipped' });
    expect(result).toBe(true);
  });

  it('should delete an order by ID', async () => {
    const mockOrder = { destroy: jest.fn().mockResolvedValue(true) };
    Order.findByPk.mockResolvedValue(mockOrder);

    const result = await OrderService.deleteOrderById('1');
    expect(Order.findByPk).toHaveBeenCalledWith('1');
    expect(mockOrder.destroy).toHaveBeenCalled();
    expect(result).toBe(true);
  });
});
