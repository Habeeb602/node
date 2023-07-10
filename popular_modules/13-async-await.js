const {readFile, writeFile} = require('fs');


// We are creating a promise for the readFile async method
const readText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf-8", (err, data) => {
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}


// We are creating a promise for the writeFile async method
const writeText = (path, content) => {
    return new Promise((resolve, reject) => {
        writeFile(path, content, {flag: "a"}, (err, result) => {
            if(err){
                reject(err);
            }
            else{
                console.log("File written successfully!!!");
                resolve(result);
            }
        })
    });
}


const operation = async() => {
    const firstFileContent = await readText("./folder/first.txt");
    const secondFileContent = await readText("./folder/second.txt");
    await writeText("./folder/result_async_await_read_write.txt", `${firstFileContent}, ${secondFileContent}\n`);
}

operation();