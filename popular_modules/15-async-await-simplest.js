const {readFile, writeFile} = require('fs').promises;
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const operation = async() => {
    const firstFileContent = await readFile("./folder/first.txt", "utf-8");
    const secondFileContent = await readFile("./folder/second.txt", "utf-8");
    await writeFile("./folder/result_async_await_read_write.txt", `${firstFileContent}, ${secondFileContent} - written from simplest\n`, {flag: "a"});
}

operation();