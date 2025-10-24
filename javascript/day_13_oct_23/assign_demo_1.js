let obj1 = { a: 10, b: 20, c: 30 };
let obj2 = { c: 35, d: 40, e: 50 };
let obj3 = Object.assign({}, obj1, obj2);
console.log(obj1)
console.log(obj2)
console.log(obj3)