// (function(exports, require, module, __filename, __dirname) {

// CUSTOM MODULES
console.log(require("./a"));
console.log(require("./a"));

// NODE_MODULES
const cowsay = require("cowsay");
console.log(cowsay.say({ text: "hello" }));

// CORE MODULES
console.log(require("node:os").cpus());

// console.log("************** main.js *************");

// // console.log(__filename);
// // console.log(__dirname);

// // console.log(module);

// })



/**
 * 
 * 
 * 
1. create a new project
2. log out the amount of time the os is running in minutes
3. log out the amount of memory used, free memory and percent available "55MB/55555MB (57% available)"
4. create a module (osInformation) which exports 
    - getMemory - will return the free memory the used memory percent available (MB)
    - getOSRunTime - will return a number saying how long the os is running (minutes)
5. use the osInformation to show the logged information
6. use cowsay to show how long the system is running instead of a simple console.log
 */