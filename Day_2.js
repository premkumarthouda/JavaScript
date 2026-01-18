console.log(a);
var a=10;
console.log(a);
a="Hello";
console.log(a);
/*
Output:
undefined
10
Hello
Js is loosly typed language. it is flexible with data types.
not put value as undefined to any variable. 
*/

//Scope and lexical environment

function outer(){
    var d=10;
}
console.log(d);

/*
Output:
ReferenceError: d is not defined
function stores variables in local memory. so it is not accessible outside the function.
*/
function a(){
    console.log(b);

}
var b=20;
a();

/*
Output:
20
because of lexical environment, function a can access variable b which is defined in global memory.
*/
function a(){
    console.log(b);
}

a();
var b=20;
/* When we acces a variable,'b' when it initialize before function call only it can be accesed , 
but when we try to acces variable in after function call , it logs undefined  */
function c(){
    d();
    function d(){
        console.log(p);
    }

}
var p =30;
c();
/*
Output:
30
because of lexical environment, function d can access variable p which is defined in global memory.
Lexical environment is Inheritance based.


*/
