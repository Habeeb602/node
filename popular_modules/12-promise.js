const {readFile} = require('fs');
// promise is an async approach that actually does the same job, but in a bit cleaner way
// we will use async/await for all the time, but this is just to know about it

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf-8", (err, data) => {
            if(err){
                console.log("Hey, I got an error!!!")
                reject(err);
            }
            else{
                console.log("Hey, I got the data!!!")
                resolve(data);
            }
        });
    })
}


// This is how we call the promise, i.e. still kind of not-an-good-approach right?
// let's make this into an async/await 
getText("./folder/first.txt")
    .then((result) => console.log(result))
    .catch((err) => console.log(err));