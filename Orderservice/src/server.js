const express = require('express');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/orders', orderRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`OrderService listening on port ${port}`);
});
