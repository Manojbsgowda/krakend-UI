//Object -> Array
const obj = {
  name: "Manoj",
  age: 20,
};

//key-value pair into array
console.log(Object.entries(obj));

//keys into array
console.log(Object.keys(obj));

//values into array
console.log(Object.values(obj));

//Array -> Object
const arr = ["Apple", "Mango", "Banana", 80, false];

console.log(Object.assign({}, arr));

console.log({ ...arr });

const arr1 = [
  ["name", "manoj"],
  ["age", 20],
];
console.log(Object.fromEntries(arr1));

//or
const map = new Map([
  ["name", "manoj"],
  ["age", 20],
]);
console.log(map);

console.log(Object.fromEntries(map));
