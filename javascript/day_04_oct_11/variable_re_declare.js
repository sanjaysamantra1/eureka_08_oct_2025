let a = 10;
console.log(`a in Global Scope: ${a}`);

function test() {
    let a = 20;
    console.log(`a in Function Scope: ${a}`);

    if (true) {
        let a = 30;
        console.log(`a in Block Scope: ${a}`);
    }
}
test();