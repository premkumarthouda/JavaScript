/*
Closer:
It is bundled or combination of function and its parent lexical environment.
*/


function a(){
    var x = 10;
    function y(){
        console.log(x);
    }
    return y;
}
var z = a();

z(); //10

function y(){
    var g=3;
    function b(){
        console.log(g);
    }
    g=21;
    return b;
}
var c = y();
c(); //21

/* I think its 3 but it's 21 because ,In function of x var a =7 in this function makes any changes in block it effects g .*/
/*Use of closers
1.Module design pattern
2.carrying
3.Functions like once
4.memoize
5.setTimeouts
*/

//SetTimeout
console.log("Timer Started");
setTimeout(() =>{
    console.log("Timer Done");
},6000);
console.log("Hello world");

/*js first executes the synchronous code and then asynchronous code 
setTimeout is an asynchronous code it will execute after the time completed

it does not pause your code.*/

console.log("1.Start");
setTimeout(() =>{
    console.log("2.Middle");
},3000);
console.log("3.End");
/*Output:
1.Start
3.End
2.Middle
why 3 print before 2 inside settimeout js does not stop at the setTimeout.it scheduled the task to for later, 
immediately move to the next line of code and execute it. 
*/
for(var i=0;i<=5;i++){
    setTimeout(() =>{
        console.log(i);
    },i*1000);
}
console.log("Hello");
/*output:
Hello
6
6
6
6
6
6
Explanation:
first it prints Hello because it is synchronous code.
loop runs from 0 to 5 and after the loop i becomes 6. 
setTimeout is asynchronous. When the loop runs, JavaScript says:

"Okay, schedule a timer for 1 second... schedule a timer for 2 seconds... etc."

It does not pause to wait for the timers. It schedules them and immediately continues running the loop.

*/
for(let i=0;i<5;i++){
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
console.log("Hello ")
/*
output:
Hello
0
1
2
3
4
because let keyward create a new scope for every iteration in loop
*/
for(var i=0;i<5;i++){
  function x(s){
    setTimeout(function() {
    console.log(s);
  }, 1000);
  }
  x(i);
}
console.log("Hello ");

/*
Output:
Hello
0
1
2
3
4
how this work , everytime x(i) function call create a new scope. that's why it prints 0 to 4 values in output.
*/


