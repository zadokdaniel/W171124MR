// console.log("start");

// setTimeout(() => console.log("hello"), 0);

// console.log("end");

function change(obj) {
  obj.a = 5;
  console.log(obj); // {a: 5, b: 6}
}

let o = {
  b: 6,
};

change(o);
console.log(o); // {a: 5, b: 6}
