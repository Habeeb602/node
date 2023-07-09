// we are using an external package here called 'lodash'
// npm i lodash
// we always need to install external packages unlike built-in packages

const lodash = require("lodash");

const arr = [1, [2, [3, [4, [5]]]]];

const flattened_arr = lodash.flattenDeep(arr);


console.log(flattened_arr);