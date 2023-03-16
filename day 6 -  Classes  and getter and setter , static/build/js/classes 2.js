"use strict";
class Coder3 {
    constructor(name, music, age, salary = 1111) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.salary = salary;
    }
    getAge() {
        return `my age is : ${this.age}`;
    }
}
// salary default value ekk thiyna nisa WebDev extend class ekata danna one na 
class WebDev extends Coder3 {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getSalary() {
        return `my salary is ${this.salary}`;
    }
}
let webdev = new WebDev("dell", "kamal", "pop", 23);
console.log(webdev.getSalary());
