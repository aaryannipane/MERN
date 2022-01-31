// creating class with another method
var Student = function(){
    this.name = "Aryan Nipane";
    this.age = "19";
    this.email = "mipaneeducation@gmail.com";
}

// another method to create class
// function Student(){
//     this.name = "Aryan Nipane";
//     this.age = "19";
//     this.email = "mipaneeducation@gmail.com";
// }

// prototype 
Student.prototype = {
    address:"Ulwe",
    getName:function(){return this.address;}
}

// creating object of class Student
var stud1 = new Student();
console.log(stud1);

console.log(stud1.getName());