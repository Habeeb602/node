const names = require("./names");
const sayHi = require("./utils");
const data = require("./module_exports_another_way");

console.log(data);

for (let name in names) {
  sayHi(names[name]);
}

// console.log(module);
