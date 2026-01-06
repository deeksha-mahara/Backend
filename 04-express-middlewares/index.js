const express = require('express');
const app = express();

//  MIDDLEWARE 1
// This runs for every request because we used app.use()
function myLogger(req, res, next) {
    console.log(`  Someone visited ${req.url} at ${new Date().toISOString()}`);
    next(); 
}

// activate the middleware
app.use(myLogger);

app.get('/', (req, res) => {
    res.send("Home Page ");
});

app.get('/about', (req, res) => {
    res.send("About Page ");
});

// MIDDLEWARE 2
// we don't use app.use() here because we only want it on specific routes
const checkAge = (req, res, next) => {
    const age = req.query.age; 

    if (!age) {
        return res.send("provide your age in the URL (e.g., ?age=20)");
    } else if (age < 18) {
        return res.send(" You must be 18 or older. Access Denied.");
    } else {
        next(); 
    }
};
app.get('/', (req, res) => {
    res.send("Home Page ");
});

// Protected Route
// we put the middleware in the middle
app.get('/dashboard', checkAge, (req, res) => {
    res.send(" Welcome to the Dashboard. Here is the data.");
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});