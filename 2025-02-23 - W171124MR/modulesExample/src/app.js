import "./runSomeCode.js"; // just run

import { getNames } from "./a.js"; // named export

import someNameIDecided from "./ed.js"; // export default

import someName, { name } from "./edAndNe.js"; // named export and export default

console.log(getNames());

console.log(someNameIDecided);
