var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

a = 15;
b = 25;
// c = 35; // This will throw an error because 'c' is a constant
// TypeError: Assignment to constant variable
console.log(a);
console.log(b);
console.log(c);