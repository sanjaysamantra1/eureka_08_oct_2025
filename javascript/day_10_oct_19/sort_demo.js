let arr1 = [20, 50, 10, 40, 30];
arr1.sort();
console.log(arr1);

let cars = ['Tata', 'Honda', 'Maruti', 'Audi'];
cars.sort();
console.log(cars);

let numArr = [10, 9, 7, 8, 91, 92, 93, 6, 5, 101, 102, 103, 104, 105];
numArr.sort(); // string type sort
console.log(numArr);

numArr.sort((a, b) => a - b); // Numeric sort
console.log(numArr);