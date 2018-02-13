//function constructors
//always capitalize for convention
function Person(first, last) {
    console.log(this);
    this.firstname = first;
    this.lastName = last;
}

const John = new Person("John", "Doe");
console.log(John);

//add properties later
//add methods to prototype instead of function constructor, as it'll only take space in memory once
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastName;
}

console.log(John.getFullName());

console.log('---------------')

Number.prototype.isPositive = function() {
    var number = new Number(this);
    return number > 0;
}

var three = 3;
console.log(three.isPositive());

console.log('---------------')

//pure prototypal inheritance

var animal = {
    name: 'default'
}

var dog = Object.create(animal);
dog.name = 'Toby';
console.log(dog);