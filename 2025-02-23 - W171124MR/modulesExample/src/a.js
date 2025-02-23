import { firstName, surname } from "./b.js";

function getFirstName() {
  return firstName;
}

function getSurname() {
  return surname;
}

// named export
export function getNames() {
  return getFirstName() + " " + getSurname();
}
