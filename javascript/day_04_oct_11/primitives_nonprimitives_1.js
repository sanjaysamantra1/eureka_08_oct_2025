let str = 'sachin';
str[0] = 'S'; // trying to change the first character to uppercase
str[1] = 'A'; // trying to change the second character to uppercase
console.log(str); // Output: 'sachin' - strings are immutable

let arr = [10,20,30,40,50];
arr[0] = 15; // changing the first element to 15
arr[1] = 25; // changing the second element to 25
console.log(arr); // Output: [15, 25, 30, 40, 50] - arrays are mutable