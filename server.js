// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const cors = require('cors');

// Initialize dotenv to use variables from .env file
dotenv.config();

// Define the User model using Mongoose
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());  // Use CORS middleware
app.use(express.json());

// Register new user
app.post('/register', async (req, res) => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user instance and save it to the database
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).send("User registered successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering new user.");
    }
});

// User login endpoint
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (user && await bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send("Login successful!");
        } else {
            res.status(400).send("Invalid credentials!");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error logging in user.");
    }
});

// Define the port and start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));