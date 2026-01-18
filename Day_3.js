/*console.log("Hello Krishna");*/


/*var let const  */
console.log(a);

var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);
/*
Output:
undefined 
10
20
30
*/
/*
var can access before it intilize ,let can't access before it intilize value. 
let and const are allocate memory first, but this are saved in seperate not in global Memory

var variable can store in global memory.

Temporal Dead Zone is an time in let variable should be between in memory saved and value initilize.

when we use const variable we must have to intilize value at the time of declaration.

when we try to acces an variable in temporal dead zone it gives error.

In let we can't declare same variable name again in same scope but in var we can declare same variable name again in same scope.

If JavaScript has a syntax error, the engine stops before execution and only throws an error.

var can redeclar 
*/

console.log(n);
let n=23;

/* 
ReferenceError: 
cannot access 'n' before initialization in let variable.
*/

var f1 =5; 
let f2=50; 
{
    var f1=10;
    let f2=15;
    const f3=20;
    console.log(f1); //10
    console.log(f2); //15
    console.log(f3); //20
}
console.log(f1); //10
console.log(f2); //50

/*
it changes var variable value in block scope but it doesn't change let variable value in block scope.

In let keyward we used to create variabe in outside block it allocate memory in separate memory or scope.
in let , const block scope is created.

*/
