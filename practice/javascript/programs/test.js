//left shift

const array = [1, 2, 3, 4];

const position = array.shift();
//console.log(position);
//console.log(array);

array.push(position);

console.log(array);

//right shift

const array1 = [1, 2, 3, 4];

const poped = array1.pop();
array1.unshift(poped);
console.log(array1);
