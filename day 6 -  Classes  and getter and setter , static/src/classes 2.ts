class Coder3{

    secondLag!:string

    constructor(public name: string, public readonly music:string ,private age:number, protected salary:number=1111){
      
    }

    public getAge(){
        return `my age is : ${this.age}`
    }

}

// salary default value ekk thiyna nisa WebDev extend class ekata danna one na 
class WebDev extends Coder3{
    constructor(public computer:string,name:string,music:string,age:number){
        super(name,music,age)
        this.computer=computer;
    }

    public getSalary(){
        return `my salary is ${this.salary}`
    }

}

let webdev = new WebDev("dell","kamal","pop",23);
console.log(webdev.getSalary());
