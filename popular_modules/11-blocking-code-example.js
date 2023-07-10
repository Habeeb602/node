const http = require("http")

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.end("Welcome to the homepage!");
    }

    if(req.url === "/about"){
        // BLOCKING CODE - Since it's synchronous
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`);
            }
        }

        res.end("This is our about page");
    }

    res.end("Error 404 not found!!!");
});

server.listen("5000", ()=> {
    console.log("Hey, I'm running at port 5000");
})