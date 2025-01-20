// File: routes/deliveryRoutes.js

const express = require('express');
const router = express.Router();
const {
  addNewDelivery,
  getDeliveryCode,
  deleteDeliveryCode,
} = require('../controllers/deliveryController');

// Route to add a new delivery code
router.post('/delivery', addNewDelivery);

// Route to retrieve a delivery code by orderId
router.get('/delivery/:orderId', getDeliveryCode);

// Route to delete a delivery code by orderId
router.delete('/delivery/:orderId', deleteDeliveryCode);

module.exports = router;
