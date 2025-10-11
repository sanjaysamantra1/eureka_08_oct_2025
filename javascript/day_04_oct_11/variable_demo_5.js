var a = 10; // Global variable
console.log(`Global Scope: a = ${a}`); // Outputs: 10

function varDemo() {
    var b = 20; // Function variable
    c = 30; // Implicit global variable
    console.log(`Function Scope: b = ${b}`);
}
varDemo();

// console.log(`b in Global Scope: b = ${b}`); // ReferenceError: b is not defined
console.log(`c in Global Scope: c = ${c}`); // Outputs: 30