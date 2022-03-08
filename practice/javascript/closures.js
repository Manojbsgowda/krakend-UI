let a = 10;
const outer_fn = () => {
  a++;
  //   console.log("1", a);

  const inner_fn = () => {
    a++;
  };
  inner_fn();
  return a;
};
// console.log(outer_fn());
// console.log(outer_fn());

const ref1 = outer_fn();
console.log("ref1", ref1);

const ref2 = outer_fn();
console.log(ref2);

console.log(ref1 === ref2);
