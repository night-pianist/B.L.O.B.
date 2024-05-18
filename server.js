const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

const User = require('./models/User');

// Endpoint to register a user
app.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered');
});