type InputType = {
  show: ()=>void;
};
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(3, 4));
interface D {
  name: string,
}

const som : D = {
  name: 'art'
};
console.log(som)