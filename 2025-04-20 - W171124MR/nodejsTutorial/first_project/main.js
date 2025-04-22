// console.log(globalThis);
// console.log(process.argv);

const [, , firstName, surname] = process.argv;

if (["-h", "--help"].includes(firstName)) {
  throw new Error("node . <first name> <last name>");
}

if (firstName.length < 2 || !Number.isNaN(Number(firstName))) {
  throw new Error(
    `"first name" must be a valid name. You provided "${firstName}".`
  );
}

console.log(`hello, ${firstName}.`);
console.log(`is your full name ${firstName} ${surname}?`);


/***
 * 
 * 
 * 
 * 
 * 
1. create a new project
2. create a program which receives an operator (x+-/) and two numbers and show the result 

node . 5 x 5 => 25
node . 15 - 5 => 10

 */