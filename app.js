// Calculator_app functionalities

// Functionality for clear button
let display = document.getElementsByName('display')[0];

let clear = document.getElementById('clear');

clear.onclick = function clear() {
    display.value = "";
}

// Functionality for division button

let division = document.getElementById('division');

division.addEventListener('click', function() {
    display.value += "/";
})

// Functionality for multiplication button

let multiplication = document.getElementById('multiplication');

multiplication.addEventListener('click', function() {
    display.value += "*";
})

// Functionality for delete

let remove = document.getElementById('delete');

remove.addEventListener('click', function() {
    display.value = display.value.toString().slice(0,-1);
})

// Functionality for button 7

let seven = document.getElementById('seven');

seven.addEventListener('click', function() {
    display.value += 7;
})

// Functionality for button 8

let eight = document.getElementById('eight');

eight.addEventListener('click', function() {
    display.value += 8;
})

// Functionality for button 9

let nine = document.getElementById('nine');

nine.addEventListener('click', function() {
    display.value += 9;
})

// Functionality for button -

let minus = document.getElementById('minus');

minus.addEventListener('click', function() {
    display.value += "-";
})

// Functionality for button 4

let four = document.getElementById('four');

four.addEventListener('click', function() {
    display.value += 4;
})

// Functionality for button 5

let five = document.getElementById('five');

five.addEventListener('click', function() {
    display.value += 5;
})

// Functionality for button 6

let six = document.getElementById('six');

six.addEventListener('click', function() {
    display.value += 6;
})

// Functionality for button +

let addition = document.getElementById('addition');

addition.addEventListener('click', function() {
    display.value += "+";
})

// Functionality for button 1

let one = document.getElementById('one');

one.addEventListener('click', function() {
    display.value += 1;
})

// Functionality for button 2

let two = document.getElementById('two');

two.addEventListener('click', function() {
    display.value += 2;
})

// Functionality for button 3

let three = document.getElementById('three');

three.addEventListener('click', function() {
    display.value += 3;
})

// Functionality for button .

let dot = document.getElementById('dot');

dot.addEventListener('click', function() {
    display.value += ".";
})

// Functionality for button %

let modulus = document.getElementById('modulus');

modulus.addEventListener('click', function() {
    display.value += "%";
})

// Functionality for button 0

let zero = document.getElementById('zero');

zero.addEventListener('click', function() {
    display.value += 0;
})

// Functionality for button =

let equalTo = document.getElementById('equalTo');

equalTo.addEventListener('click', function() {
    display.value = eval(display.value);
})














