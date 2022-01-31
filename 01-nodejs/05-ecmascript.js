// ECMAScript or ES6 2015  
// let, const, templating string, class

// disadvantage of var keyword
var a = 10;
// here no error will occur as we declare a variable second time (disadvantage)
var a = 40;
console.log(a);




// LET keyword (it is scope variable)

function abc(){
    let b = 40;
    console.log(b);
}

let b = 10;
abc(); // 40
// let b = 40; // will throw error
console.log(b);

// CONST keyword (once initialised then can't change later)
const pie = 2.143;

// pie = 123; // thorws error




// template string

var name = "Aryan";
var age = "19";

// old method 
console.log("hi %s your age is %s", name, age);

// javascript method
console.log("hi "+name+" your age is "+age);

// new method
console.log(`hi ${name} your age is ${age}`);




// class

class Users{
    constructor(){
        this.name = "Babu";
        this.age = "10";
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

}

// creating object of class Users
let u1 = new Users();
console.log(u1.getName());