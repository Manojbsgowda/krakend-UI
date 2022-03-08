const str = "How are you";

const eachStringArr = Array.from(str);
console.log(eachStringArr);

for (const el in eachStringArr) {
  console.log(str.charCodeAt(el));
}

console.log(String.fromCharCode(121));
