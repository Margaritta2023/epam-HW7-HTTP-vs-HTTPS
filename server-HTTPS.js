
const https = require('https');
const fs = require('fs');
const path = require('path');

console.log("Starting HTTPS server...");
console.log(__dirname);

const options = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
};
//console.log(options.key.toString())

try {
    const server = https.createServer(options, (req, res) => {
    

        if (req.url === '/') {
            console.log("Handling root request.");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1 style="color:pink; background:red">Hello, this is HTTPS server</h1>');
        } else {
            console.log("Handling 404 request.");
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
        }
    });

    const PORT = 3002;
    server.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });

    server.on('error', (err) => {
        console.error('Server error:', err);
    });
} catch (err) {
    console.error('Error while setting up the server:', err);
}