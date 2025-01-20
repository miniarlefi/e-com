const mongoose = require("mongoose");
const DeliveryCode = require("../models/deliveryCode");
const uuid = require("uuid");

// Function to generate a unique delivery code
function generateDeliveryCode(orderId) {
  const prefix = "DEL"; // Categorize the code, example: DEL-20250116-ABC123-12345. "DEL" stands for Delivery.

  // Get the current date in YYYYMMDD format
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");

  // Generate a random code using UUID and uppercase the first 6 characters
  const randomPart = uuid.v4().slice(0, 6).toUpperCase();

  // Combine the prefix, current date, random part, and order ID to form the unique delivery code
  return `${prefix}-${date}-${randomPart}-${orderId}`;
}

// Function to handle adding a new delivery
async function addNewDelivery(req, res) {
  // Extract the orderId from the request body
  const { orderId } = req.body;

  // Check if the orderId is provided in the request; if not, return an error
  if (!orderId) {
    return res.status(400).json({ success: false, message: "Order ID is required" });
  }

  // Generate the delivery code using the orderId
  const code = generateDeliveryCode(orderId);

  try {
    // Create a new delivery code document
    const newDelivery = new DeliveryCode({
      orderId,
      code,
    });

    // Save the delivery code to MongoDB
    await newDelivery.save();

    // Send the response with the generated code
    return res.json({ success: true, code: newDelivery.code });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to generate delivery code" });
  }
}

//An endpoint to delete a delivery code if an order is canceled or no longer valid.

async function deleteDeliveryCode(req, res) {
  const { orderId } = req.params;

  // Check if the orderId is provided in the request; if not, return an error
  if (!orderId) {
    return res.status(400).json({ success: false, message: "Order ID is required" });
  }

  try {
    // Find and delete the delivery code associated with the given orderId
    const result = await DeliveryCode.findOneAndDelete({ orderId });

    if (!result) {
      return res.status(404).json({ success: false, message: "Delivery code not found" });
    }

    // Return success message
    return res.json({ success: true, message: "Delivery code deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Failed to delete delivery code" });
  }
}

module.exports = {
  addNewDelivery,
  deleteDeliveryCode, // Ensure deleteDeliveryCode is exported
};
