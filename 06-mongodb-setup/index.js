const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); 
const app = express();

app.use(express.json());

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/my_database")
    .then(() => console.log(" DB Connected"))
    .catch((err) => console.log(" DB Error", err));

app.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created!", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log("Server running..."));