/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);


// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumber2 = (a, b) => a + b;
const addTwoNumbers = (a, b) => (a + b);

// Implicit Returns
const saySomething = message => console.log(mesage);
saySomething('Hello there!!');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)

console.log(returnMultipleLines());