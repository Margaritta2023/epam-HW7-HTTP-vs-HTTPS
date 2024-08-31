const http = require('http');

try {
    const server = http.createServer((req, res) => {
        if (req.url === '/')
        {console.log("Received a request.");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1 style="color:green; background-color:lightblue">Hello, this is HTTP server</h1>');}
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
        }
    });

    const PORT = 4000;
    server.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });

    server.on('error', (err) => {
        console.error('Server error:', err);
    });
} catch (err) {
    console.error('Error while setting up the server:', err);
} 
