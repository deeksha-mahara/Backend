const http = require('http');
const server = http.createServer((req, res) => {
    console.log("New Request received for:", req.url);
//routing(traffic control)
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Home Page");
    
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("About Page");
    
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Contact Page");
    
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 Error: Page not found ");
    }
});
// Server Listening on Port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});