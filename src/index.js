import { shallowEqual } from './shallow-equal';

const A = {
  name: 'a',
  colors: 'blue',
  
}
const B = {
  name: 'b',
  colors: 'blue',
  
}
console.log(shallowEqual(A, B))