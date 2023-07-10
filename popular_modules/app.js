const http = require("http");

const server = http.createServer();

// listening on "request", once we hit port 5000, we are actually emitting-event.
server.on("request", (req, res) => {
    res.end("Hello World!!!");
})

server.listen(5000);