const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end("<h1>Welcome to our website</h1>");
    }

    if(req.url === '/about'){
        res.end("<h2>This is our short history</h2>");
    }

    res.end(`
    <h1>404 Not Found</h1>
    <p>The page that you are searching isn't exist :(</p>
    <a href="/">Back to home</a>
    `);
})

server.listen(5000);