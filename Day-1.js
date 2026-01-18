/*
  What JS does

Makes pages interactive (clicks, forms, animations)

Thinks in events (user actions → instant response)

Talks to servers & APIs

Runs logic directly in the browser and on servers

Where JS is used

Web Frontend → React, Angular, Vue (what users see & interact with)

Backend → Node.js (servers, APIs, auth, databases)

In JS Execution Contexts 
JS executes one line at a time ,when executed line by line it creates an execution context. There are two types of execution contexts:
    Global Execution Context (GEC)
    Function Execution Context (FEC)

JS is synchronous and single-threaded (one thing at a time)

Everything in JS happens inside an execution context conatins Memory and Code

*/


var n=2 ;

function square(num){
    var result = num * num;
    return result;
}

var square1 = square(n);
var square2 = square(3);
console.log(square1);
console.log(square2);

/*
phase 1 : in js first create memory space for all variables and functions and initialize them with undefined
phase 2 : execute the code line by line and assign values to the variables and execute functions when called
after excution completes the global execution context is destroyed

*/

getName();
console.log(a);
function getName(){
    console.log("Hello World");
}
var a = 10;
/*
Output:
Hello World
undefined
*/
console.log(b);
/*
Output:
ReferenceError: b is not defined
*/

getName();
var getName = () => {
    console.log("Hello World");
}

/*
Output:
TypeError: getName is not a function, because in the hoisting phase, getName is initialized with undefined, so when we try to call it as a function, it throws an error.
it shows not defined because variable should
*/

var getName2 = function(){


}// another method of function expression 

var x=1;
s();
p();
console.log(x);
function s(){
    var x=2;
    console.log(x);
}
function p(){
    var x=3;
    console.log(x);
}
/*
Output:
2
3
1
*/

console.log(this.x); 
console.log(window.x);
console.log(x);

// above three will give same output as 1 because in browser window is global object and this refers to global object in global context
console.log(m);
var m=5;
console.log(m);
console.log(z);

/*
Output:
undefined
5
ReferenceError: z is not defined
when user creates a variable m =5 using var keyword, it create memory space for m in global execution context it initializes it with undefined. so when we try to access m before initialization it gives undefined. after initialization it gives 5.

when we try to access z which is not defined anywhere in the code it gives reference error.
*/
