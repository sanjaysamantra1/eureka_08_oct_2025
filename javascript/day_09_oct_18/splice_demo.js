// splice(pos, deleteCount, ...items)

let arr = [10, 20, 30, 40, 50];

arr.splice(1, 2); // only delete
console.log(arr); // [10,40,50]

arr.splice(1, 0, 20, 30); // only add
console.log(arr); // [10,20,30,40,50];

arr.splice(1, 2, 25, 35); // both add and delete
console.log(arr);


let cars = ['Tata', 'Honda', 'Maruti', 'Hundai'];
let modifiedCars = cars.splice(1, 2);
console.log(cars)
console.log(modifiedCars)