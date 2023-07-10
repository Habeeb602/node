const {readFile} = require('fs')

console.log("Started");


// node offloads this file read, and starts executing next statements
readFile("./folder/first.txt", "utf8", (err, result) => {
    if(err){
        console.log(err);
    }
    console.log(`File has been read: ${result}`);
});

console.log("Started another task!");
