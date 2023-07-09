const {readFile, writeFile} = require('fs');

// async read/write has a callback function in it
// since it's gonna execute in a different thread, we can't be sure when it's will finish the read/write process
// the callback function will executed, once the read/write process finishes
// through that callback we can carry out various tasks, that are required to be done.
console.log("Starting the task!");

readFile("./folder/first.txt", "utf-8", (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile("./folder/second.txt", "utf-8", (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./folder/result_async.txt", `The result is : ${first} + ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("Completed the task!");
        })
    });
});

console.log("Starting another task!");