//crate a class called shape with method to calculate the area and perimeter of a shape. create subclasses for circle, rectangle, and triangle that inherit from shape and implement the area and perimeter methods for each shape.
class shape{
    constructor(){
        this.name = "Shape";
    }
    area(){
        return 0;
    }
    perimeter(){
        return 0;
    }
}
class circle extends shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
    perimeter(){
        return 2 * Math.PI * this.radius;
    }
}
class rectangle extends shape{
    constructor(length, width){
        super();
        this.length = length;
        this.width = width;
    }
    area(){
        return this.length * this.width;
    }
    perimeter(){
        return 2 * (this.length + this.width);
    }
}
class triangle extends shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    area(){
        return 0.5 * this.base * this.height;
    }
    perimeter(){
        return this.base + this.height + Math.sqrt(this.base * this.base + this.height * this.height);
    }
}
//create a class called 'person' with properties name, age, and city. include a method to display the person's information. 
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    displayInfo() {
        return (`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}
//create a class called 'car' with properties make, model, and year. include a method to display the car's information.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        return (`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}
//create a class called 'student' with properties name, age, and grade. include a method to display the student's information.

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        return (`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
//create a class called 'employee' with properties name, age, and salary. include a method to display the employee's information.
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    displayInfo() {
        return (`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
}
//create a class called 'book' with properties title, author, and year. include a method to display the book's information.
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displayInfo() {
        return (`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}
//create a class called 'animal' with properties name, species, and age. include a method to display the animal's information.
class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
    displayInfo() {
        return (`Name: ${this.name}, Species: ${this.species}, Age: ${this.age}`);
    }
}
//create a class called 'phone' with properties brand, model, and year. include a method to display the phone's information.
class Phone {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        return (`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}