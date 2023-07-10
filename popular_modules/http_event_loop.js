const http = require("http");


const server = http.createServer((req, res) => {
    console.log("Getting request");
    res.end("Hello Everyone!!!");
})

server.listen(5000, ()=>{
    console.log("Hey, I'm server LISTEN method and I'm async, I got pushed into event loop, so I will stay alive till the process got killed");
});