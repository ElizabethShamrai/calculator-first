'use strict';
let x = +prompt("Choose the first number?", '');
let y = +prompt("Choose the second number?", '');

function sum() {
    return console.log(`summa ${x + y}`);
}

function min() {
    return console.log(`subtraction ${x - y}`);
}

function mult() {
    return console.log(`multiplication ${x * y}`);
}

function div() {
    return console.log(`division ${x / y}`);
}
sum();
min();
mult();
div();