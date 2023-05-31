/* eslint-disable no-unused-vars */
const exress = require('express');

const router = exress.Router();

router.get('/', (req, res, next) => {
  res.status(201).json({
    message: 'Order was created successfully',
  });
});

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: 'Order was created successfully',
    order,
  });
});

router.get('/:orderId', (req, res, next) => {
  res.status(201).json({
    message: 'Order details',
    orderId: req.params.orderId,
  });
});

router.delete('/:orderId', (req, res, next) => {
  res.status(201).json({
    message: 'Order was deleted successfully',
    orderId: req.params.orderId,
  });
});

module.exports = router;
