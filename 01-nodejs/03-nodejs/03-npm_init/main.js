const a = 10;
var b = 20;
 
let c = a + b;

console.log("hello aryan " + c);

// object in js
var user = {name:"Aryan Nipane", age:19, email:"nipaneeducation@gmail.com"};

console.log(user);
console.log( "Hello " + user.name);

// anonymous function
var person = function (a, b){
    console.log("Anonymous function called");
}
// call to anonymous function
person(10, 20);

// Arrow function
var work = ()=>{console.log("arrow function called")};
work();