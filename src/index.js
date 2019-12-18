import createObject from './new';

function func(age) {
  this.name = 'JUNE';
  this.age = age;
}
const obj2 = createObject(func, '24')
console.log(obj2.name)