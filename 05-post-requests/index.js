const express = require('express');
const app = express();

// MIDDLEWARE
// This line tells express to allow json data to come in the envelope body
// without this req.body will be undefined.
app.use(express.json());
//get route to test srver is running
app.get('/', (req, res) => {
    res.send("Server is running. Send a POST request to /register to test.");
});

//  POST Route to Recieve Data
app.post('/register', (req, res) => {
    // The data sent by the user is inside 'req.body'
    const userData = req.body;
    
    console.log("Received Data:", userData);
    
    res.json({
        message: " User Registered!",
        user: userData,
        status: "Active"
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});