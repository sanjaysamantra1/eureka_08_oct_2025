function varTest() {
    if (true) {
        var a = 10;
        console.log(`Inside if block: a = ${a}`); // a is accessible here
    }
    console.log(`Outside if block: a = ${a}`); // a is also accessible here
    // ideally it should give error as a is defined inside if block
}
varTest();

// In JavaScript, 'var' is function-scoped, not block-scoped. 
// Therefore, a variable declared with 'var' inside a block (like an if statement) 
// is accessible outside that block within the same function.



for (var i = 1; i <= 5; i++) {
    console.log(`i = ${i}`); // i is accessible here
}
console.log(`i in Global Scope: i = ${i}`); // i is also accessible here