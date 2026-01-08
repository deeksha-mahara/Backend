const http = require('http');
const fs = require('fs'); 
const server = http.createServer((req, res) => {
    
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFile('server.log', logMessage, (err) => {
        if (err) console.error(err);
    });

    //Routing Logic(checking url to decide what to send back)
    if (req.url === '/') {
        // Serving an HTML File
        fs.readFile('./02-http-server/index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' }); (//telling browser this is html file)
                res.end(data);
            }
        });

    } else if (req.url === '/api/user') {
        // Json Data 
        const userData = {
            name: "Deeksha",
            role: "Developer",
            skills: ["Node.js", "C++", "Python"],
            isHired: false
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(userData));

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404: Page Not Found");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Advanced Server running at http://localhost:${PORT}`);
});