const express = require('express');
const app = express();

//this line allows our server to read JSON data sent in the body
app.use(express.json()); 

// these are Routes
app.get('/', (req, res) => {
    res.send("Hello.");
});
app.get('/about', (req, res) => {
    res.send("About Page");
});

app.get('/contact', (req, res) => {
    // sending JSON is automatic . No need for JSON.stringify()
    res.json({
        email: "abc@gmail.com",
        phone: "99999"
    });
});

// dynamic route 
// : tells Express that username is a variable, not a fixed word.
app.get('/profile/:username', (req, res) => {
    
    // req.params holds all the variables from the URL
    const capturedName = req.params.username;
    res.send(`Welcome to the profile of: ${capturedName}`);
});

app.get('/profile/:username/post/:postId', (req, res) => {
    const { username, postId } = req.params; 
    res.send(`User ${username} is looking at Post ID: ${postId}`);
});

app.use((req, res) => {
    res.status(404).send("404 - Page Not Found ");
});

// server start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});