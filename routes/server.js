const express = require('express');
const mongoose = require('mongoose');
const deliveryRoutes = require('./routes/deliveryRoutes');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb+srv://useContact:test1@cluster2.ogcau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Use delivery routes
app.use('/api', deliveryRoutes);

// Start the server
const PORT=3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
