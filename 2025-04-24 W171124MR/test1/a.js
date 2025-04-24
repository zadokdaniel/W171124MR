// (function(exports, require, module, __filename, __dirname) {

// console.log("************** a.js *************");

// console.log(__filename);
// console.log(__dirname);

// console.log(module);

const firstName = "lora",
  lastName = "Yohananof";

function sayHi() {
  return `Welcome ${firstName} ${lastName}`;
}

module.exports = {
  firstName,
  lastName,
  sayHi,
};

// })
