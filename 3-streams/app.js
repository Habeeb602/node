const {writeFileSync} = require('fs');
const http = require("http");
const {createReadStream} = require("fs");
/*
for(let i=0;i<100000;i++){
    writeFileSync("./content/big-file.txt", `Hello World ${i}\n`, {flag:"a"});
}
*/

// Responsing to a server request, by writing the data as chunks

const server = http.createServer((req, res) => {
    // Default response
    const readStream = createReadStream("./content/big-file.txt", "utf-8");
    // This opens the stream
    readStream.on("open", ()=>{
        // pipe method write the data as chunks into the passed object, here it's response object
        readStream.pipe(res);
    });

    readStream.on("error", (err) => {
        console.log(err);
        res.end(err);
    });

    // res.end("Hi");
});


server.listen(5000);
