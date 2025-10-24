let obj1 = { a: 10, b: 20 };
obj1.a = 15;   // update value - yes
obj1.c = 30;   // add a new property- yes
delete obj1.b; // delete- yes
console.log(obj1); // { a: 15, c: 30 }

let obj2 = Object.freeze({ a: 100, b: 200 });
obj2.a = 150;
obj2.c = 300;
delete obj2.b;
console.log(obj2);

console.log(Object.isFrozen(obj1))
console.log(Object.isFrozen(obj2))