const arr = ["Apple", "Mango", "Banana"];

//traditional : for-loop
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//To access array index : for-in
for (const el in arr) {
  console.log(el);
}

//To access array values : for-of
for (const el of arr) {
  console.log(el);
}

//map()
arr.map((value, index, arr) => {
  console.log(index, value);
  //   console.log(value);
});

arr.map(() => {});
