// Streams comes into picture when we are dealing with larger files and data
// When read or writing a data, which is so large that the memory cannot hold it all at once
// So streams make them into chunks and makes life easier.

const {writeFileSync} = require('fs');

// Default stream read limit is 65 KB
// We can change that by setting the property call "highWaterMark"
// The upper bound for "highWaterMark" is 90 KB

/*
for(let i=0;i<10000;i++){
    writeFileSync("./content/big-file.txt", `Hello World ${i}\n`, {flag:"a"});
}
*/

const {createReadStream} = require('fs');

const stream = createReadStream("../content/big-file.txt", {highWaterMark: 90000});

stream.on("data", (result) => {
    console.log(result);
    console.log(result.length);
})

stream.on("error", (err) => {
    console.log(err);
})
 
