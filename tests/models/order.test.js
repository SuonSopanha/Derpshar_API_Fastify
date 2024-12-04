const SequelizeMock = require('sequelize-mock');
const OrderModel = require('../../src/models/order'); 

const sequelize = new SequelizeMock();
const UserMock = sequelize.define('User', {}, {});
const OrderMock = OrderModel(sequelize, DataTypes);

describe('Order Model', () => {
  it('should define the Order model correctly', () => {
    expect(OrderMock).toBeDefined();
  });

  it('should have proper fields', () => {
    const fields = OrderMock.rawAttributes;
    expect(fields.id).toBeDefined();
    expect(fields.user_id).toBeDefined();
    expect(fields.status).toBeDefined();
    expect(fields.total_amount).toBeDefined();
    expect(fields.created_at).toBeDefined();
    expect(fields.updated_at).toBeDefined();
  });
});
