array = [];
console.log(typeof array); //object
console.log(Object.prototype.toString.call(array)); //object Array

number = 3;
console.log(typeof number); //number

string = "a string";
console.log(typeof string); //string

object = {};
console.log(typeof object); //object

emptyFunction = function(){};
console.log(emptyFunction); //f (){}

function Person(name){
    this.name = name;
}

emma = new Person("Emma");
console.log(typeof emma); //Person
console.log(emma instanceof Person); //true

console.log(typeof undefined); //undefined
console.log(typeof null); //object (a bug since forever)