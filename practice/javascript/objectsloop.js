const obj = {
  name: "Manoj",
  age: 20,
};

// To access object key
for (const el in obj) {
  console.log(el);
}

//To access object values
const arrobj = Object.values(obj);
for (const el of arrobj) {
  console.log(el);
}
