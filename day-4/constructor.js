//constructor with name,age and city
let person = {
    name: "John",
    age: 30,
    city: "New York",
//console.log(person.name);
//console.log(person.age);
//console.log(person.city);
Pname: function() {
    console.log(this.name + " " + this.age);
    return this.age;
}
};
person.Pname();

//constructor with name,age and city
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.Pname = function() {
        console.log(this.name + " " + this.age);
        return this.age;
    }
}
let person1 = new Person("John", 30, "New York");

//class,constructor,
function person(fname, lname){
    let firstname = fname;
    let lastname = lname;

    let getdetails_noaccess = function(){
        return (`first name is: ${firstname} last name 
            is: ${lastname}`);
    }

    this.getdetails = function(){
        return (`first name is: ${firstname} last name
            is: ${lastname}`);
    }
}
let person1 = new person("John", "Doe");
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());

//Write a javascript program to create a class called 'rectangle' with properties width and height,include two methods to calculate rectangle area and peramiter.
class Rectangle {
    constructor() {
        this.width = 12;
        this.height = 12;
    }
    Area() {
        return ("The area of rectangle" + this.width * this.height);
    }
    Perimeter() {
        return ("Peramiter of rectangle" + 2*(this.width + this.height));
    }
}
const obj = new Rectangle();

console.log(obj.Area());
console.log(obj.Perimeter());

//Write a javascript program to create a class called 'Animal' with properties for species and sound.include a method to make the animal sound.create a subclass called 'Dog' that inherits from 'Animal' and adds an additional property for color. override the make sound method to include the dog's colour.
class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        return (`The ${this.species} goes ${this.sound}`);
    }
}
class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound);
        this.color = color;
    }
    makeSound() {
        return (`The ${this.color} ${this.species} goes ${this.sound}`);
    }
}
const dog = new Dog("dog", "bark", "brown");
console.log(dog.makeSound());

//write a javascript program that creates a class called bank with properties for bank names and branches.include methordsb to add a branch,and remocve a branch b,and display all branches ,create a intence of the bank class and perform operations to add remocve branches
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }
    addBranch(branch) {
        this.branches.push(branch);
    }
    removeBranch(branch) {
        const index = this.branches.indexOf(branch);
        if (index > -1) {
            this.branches.splice(index, 1);
        }
    }
    displayBranches() {
        console.log(`Branches of ${this.name}:`);
        for (let branch of this.branches) {
            console.log(branch);
        }
    }
}
const bank = new Bank("ABC Bank");
bank.addBranch("New York");
bank.addBranch("Los Angeles");
bank.addBranch("Chicago");
bank.displayBranches();
bank.removeBranch("Los Angeles");
bank.displayBranches();