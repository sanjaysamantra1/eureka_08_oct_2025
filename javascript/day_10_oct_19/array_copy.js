let arr1 = [10, 20];
let arr2 = arr1;  // Reference Copy
// A new array is not being created, the address is just getting copied to another variable
arr1.push(30);
arr2.push(40);
console.log('arr1:: ', arr1);
console.log('arr2:: ', arr2);


let arr3 = [10, 20, [30, 31]];
let arr4 = [...arr3]; // spread operator : shallow copy
// a new array is created, elements from old array are copied to new array
arr4.push(40, 50);
arr4[2].push(32, 33);
console.log('arr3:: ', arr3); // [ 10, 20, [ 30, 31, 32, 33 ] ]
console.log('arr4:: ', arr4); // [ 10, 20, [ 30, 31, 32, 33 ], 40, 50 ]
// A shallow copy of an array is a copy whose nested elements share the same references.


let arr5 = [10, 20, [30, 31]];
let arr6 = structuredClone(arr5); // structuredClone : Deep copy
// a new array is created, elements from old array are copied to new array
arr6.push(40, 50);
arr6[2].push(32, 33);
console.log('arr5:: ', arr5); // [ 10, 20, [ 30, 31, 32, 33 ] ]
console.log('arr6:: ', arr6); // [ 10, 20, [ 30, 31, 32, 33 ], 40, 50 ]