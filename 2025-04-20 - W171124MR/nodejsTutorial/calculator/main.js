const [, , _num1, _operator, _num2] = process.argv;

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  x: (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
  "^": (a, b) => a ** b,
};
const validOperators = Object.keys(operations);

const num1 = Number(_num1),
  num2 = Number(_num2);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  throw new Error(
    `must provide valid numbers. you provided ${_num1}, ${_num2}`
  );
}

if (!validOperators.includes(_operator)) {
  throw new Error(
    `must provide a valid operation (${validOperators.join(
      " ,"
    )}). you provided ${_operator}.`
  );
}

console.log(operations[_operator](num1, num2));
