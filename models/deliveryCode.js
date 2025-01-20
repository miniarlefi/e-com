const mongoose = require('mongoose');

// Define the schema for DeliveryCode
const deliveryCodeSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for DeliveryCode
const DeliveryCode = mongoose.model('DeliveryCode', deliveryCodeSchema);

module.exports = DeliveryCode;
