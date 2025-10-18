let cars = ['Tata', 'Honda', 'Maruti', 'Hyundai'];

// 1. loop
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log('===================');

// 2. for-in (ES_6   2015)
for (i in cars) {
    console.log(cars[i]);
}
console.log('===================');

// 3. for-of
for (car of cars) {
    console.log(car);
}
console.log('===================');


// 4. foreach()
cars.forEach((val, ind, arr) => {
    console.log(val, ind, arr);
});