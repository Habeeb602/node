// it's the way of importing the methods from modules like in python
// from fs import readFileSync, writeFileSync
const {readFileSync, writeFileSync} = require('fs');
// Sync is a blocking technique, Async is a non-blocking technique
// which means it does/doesn't block the current program thread

console.log("Starting the task!");
const first = readFileSync('./folder/first.txt', 'utf-8');
const second = readFileSync('./folder/second.txt', 'utf-8');


// this will create a file if it doesn't exists.
// if file already exists, it will overwrite the file with the content given in the method
writeFileSync("./folder/result_sync.txt", `The result is: ${first} + ${second}`)

// by setting the third property, we will be able to set the mode/flag of writing, whether we want to overwrite or append
writeFileSync("./folder/result_sync.txt", `\nThe result is: ${first} + ${second}`, {flag: "a"})

console.log("Completed the task!");
console.log("Starting another task!");

