// define a variable
var x = 3;
var name = 'nilesh'

// Equality
console.log(3 == '3'); // true
console.log(3 === '3'); // false

// Logical operators
console.log('true && true is '+ true && true);
console.log('true && false is '+ true && false);
console.log('false || false is '+ false || false);
console.log('true || false is '+ true || false);

// Define function - type 1
function add (num1, num2) { // Note that you don't specify type of arguments here.
    return num1 + num2;
}
console.log(add(2, 3));

// Define function - type 2
var multiply = function(num1, num2) {
    return num1 * num2;
}

// number to string
var numAsStr = 2000 + '';
console.log('String 2000 to number ' + 2000 + ' + is ' + numAsStr);
// string to number
var strAsNum = parseInt('2000');
console.log('Number ' + 2000 + ' as string is '+strAsNum);

// object - JSON
var student = { name: 'nilesh', rollNum: 1 };
console.log('student name: ' + student.name);

// array - array indices are zero based
var numbers = [2, 4, 5, 6];
console.log('First number in array is ' + numbers[0]);
// array of objects
var students = [ { name: 'nilesh', rollNum: 1 },
{ name: 'rajan', rollNum: 2 },
{ name: 'vivek', rollNum: 3 }];

// define a tupple
[p, q] = [2, 3];
console.log('Tupple before ' + [p,q]);
// swap values of a tupple
[p, q] = [q, p];
console.log('Tupple after ' + [p,q]);

// Callback
setTimeout(function(){ 
    console.log('Though I appear first in code, I am inside a callback.'); 
}, 3000);
console.log('I am second one but I get printed first');
