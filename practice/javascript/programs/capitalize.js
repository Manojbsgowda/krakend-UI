// const capitalize = (data) => {
//   let a = data.toUpperCase();
//   console.log(a);
// };

const capitalize = (data) => {
  const strArray = data.split(" ");
  // console.log(strArray);

  let newArray = [];
  for (const el of strArray) {
    // console.log(el);
    // console.log(el.charAt(0));
    const firstPos = el.charAt(0);
    const upper = firstPos.toUpperCase();
    const rem = el.slice(1, el.length);
    //  console.log(upper, rem);

    const add = upper + rem;
    //console.log(add);
    newArray.push(add);
  }
  //console.log(newArray);
  const joins = newArray.join(" ");
  console.log(joins);
};

capitalize("how are you");
