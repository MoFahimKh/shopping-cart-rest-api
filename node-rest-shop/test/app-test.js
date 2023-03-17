const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Orders API', () => {
  describe('GET /', () => {
    it('should return status 201 and a success message', async () => {
      const res = await chai.request(app).get('/orders');
      expect(res).to.have.status(201);
      expect(res.body.message).to.equal('Order was created successfully');
    });
  });

  describe('POST /', () => {
    it('should create a new order and return status 201 and the order details', async () => {
      const order = {
        productId: 123,
        quantity: 2,
      };
      const res = await chai.request(app).post('/orders').send(order);
      expect(res).to.have.status(201);
      expect(res.body.message).to.equal('Order was created successfully');
      expect(res.body.order.productId).to.equal(order.productId);
      expect(res.body.order.quantity).to.equal(order.quantity);
    });
  });

  describe('GET /:orderId', () => {
    it('should return status 201 and the order details', async () => {
      const orderId = 123;
      const res = await chai.request(app).get(`/orders/${orderId}`);
      expect(res).to.have.status(201);
      expect(res.body.message).to.equal('Order was details');
      expect(res.body.orderId).to.equal(orderId);
    });
  });

  describe('DELETE /:orderId', () => {
    it('should delete the order and return status 201 and the deleted order ID', async () => {
      const orderId = 123;
      const res = await chai.request(app).delete(`/orders/${orderId}`);
      expect(res).to.have.status(201);
      expect(res.body.message).to.equal('Order was deleted successfully');
      expect(res.body.orderId).to.equal(orderId);
    });
  });
});
