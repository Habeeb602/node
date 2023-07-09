const path = require('path');

// sep prop has the seperator that is used in the underlying OS
console.log(path.sep);

// join method joins the path given in as a form of strings. Also removes extra slashes(i.e. /)
const filePath = path.join("/folder", "subfolder", "test.txt");
console.log(filePath);

// basename() returns the last path or file in the given path
console.log(path.basename(filePath));


// resolve() gets the absolute path for the given paths in the args
const absolutePath = path.resolve(__dirname, 'folder', 'subfolder', 'test.txt');
console.log(absolutePath);
