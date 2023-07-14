const {readFile, writeFile} = require('fs');
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const operation = async() => {
    const firstFileContent = await readFilePromise("./folder/first.txt", "utf-8");
    const secondFileContent = await readFilePromise("./folder/second.txt", "utf-8");
    await writeFilePromise("./folder/result_async_await_read_write.txt", `${firstFileContent}, ${secondFileContent} - written from simpler\n`, {flag: "a"});
}

operation();