// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware for parsing JSON bodies

let orders = [
    { id: 1, item: 'Apple', quantity: 10 },
    { id: 2, item: 'Banana', quantity: 20 },
    { id: 3, item: 'Cherry', quantity: 30 }
];

// Get all orders
app.get('/orders', (req, res) => {
    res.status(200).json(orders);
});

// Create a new order
app.post('/orders', (req, res) => {
    const { item, quantity } = req.body;
    const newOrder = { id: orders.length + 1, item, quantity };
    orders.push(newOrder);
    res.status(201).send(newOrder);
});

// Get a specific order by id
app.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) res.status(404).send('Order not found.');
    else res.status(200).json(order);
});

// Update an existing order
app.put('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) {
        res.status(404).send('Order not found.');
    } else {
        const { item, quantity } = req.body;
        order.item = item;
        order.quantity = quantity;
        res.status(200).send(order);
    }
});

// Delete an order
app.delete('/orders/:id', (req, res) => {
    const index = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (index > -1) {
        orders.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Order not found.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
