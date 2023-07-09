const names = require("./names");
const sayHi = require("./utils");
const data = require("./module_exports_another_way");

// Whenever an module get imported, the code in that file will run once, even if the file doesn't have any module.exports in it.
const summa = require("./mind_grenade");

// console.log(data);

// for (let name in names) {
//   sayHi(names[name]);
// }

// console.log(module);
