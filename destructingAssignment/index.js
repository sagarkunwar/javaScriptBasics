// desctructuring is simply means as assigning the value of an array to the local variables

// // old ways of doing it was like given below

// const a = ["1", "2", "3"];
// const b = [0]; // assigning values through indexValue
// const c = [1];
// const d = [2];
// console.log(b);
// console.log(c);
// console.log(d);

// // lets do the same thing in new ways easypege which is given below

// const a1 = ["1", "2", "3"];

// const [b1, ...rest] = a1; // direct b1 is assigned to index one and rest of other index are to other arr which is seen by ...rest
// console.log([b1]);
// console.log([...rest]);

const a = { c: 3, d: 5 };

function b(a) {
  const { c: e } = a;
  return e;
}

const e = console.log(b(a));

// let find the which day is tomorrow

const days = {
  1: "sunday",
  2: "monday",
  3: "tuesday",
  4: "wednesday",
  5: "thursday",
  6: "friday",
};

function tellMeTomorrowsDay(days) {
  const { 2: tomorrowIS } = days;
  return tomorrowIS;
}

const hey = console.log(tellMeTomorrowsDay(days));

//===============================================================
// revising desturctingAssignment

const array = {
  arr1: 5,
  arr2: 7,
};

function dA(array) {
  const { arr1: five } = array;
  return five;
}

const resutl = console.log(dA(array));

//======================================
//with rest

const a1 = [(ram = 1), (rum = 2), (shyam = 3)];
// now using ...rest from ES6

const [as, ...rest] = a1;
console.log(as);
console.log(...rest);
