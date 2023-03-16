"use strict";
// type script classes
// class Coder{
//     name:string
//     music:string
//     age:number
//     constructor(name: string, music:string , age:number){
//         this.name=name
//         this.music=music
//         this.age=age
//     }
// }
// ------------------------ access privilages --------------------------------------------------
class Coder2 {
    // readonly eka parai value assign karann puluwan
    // public, public readonly , private , protected
    constructor(name, music, age, salary) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.salary = salary;
    }
    getAge() {
        return `my age is : ${this.age}`;
    }
}
const coder2 = new Coder2("shiran", "rock", 25, 1234);
console.log(coder2.getAge()); // my age is : 25
console.log(coder2.secondLag); // undefined
console.log(coder2.secondLag);
