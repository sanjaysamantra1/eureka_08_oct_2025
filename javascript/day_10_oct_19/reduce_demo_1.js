let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((prev, curr) => {
    console.log(prev, curr)
    return prev + curr;
}, 0);
console.log(`sum is: ${sum}`);

let str = 'SACHIN';
let rev = str.split('').reduce((prev, curr) => {
    console.log(prev, curr)
    return curr + prev;
},'')
console.log(`Reverse for ${str} is ${rev}`)