
interface Customer {
    cusId:string | number
    cusName:string
    cusSalary:number

    getName(cusName:string):string

}

class CustomerDetails implements Customer{

    cusId:string | number
    cusName:string
    cusSalary:number

    constructor(cusId:string | number , cusName: string , cusSalary:number){
        this.cusId=cusId
        this.cusName=cusName
        this.cusSalary=cusSalary
    }

    public getName(cusName: string): string {
        return `my cus id is ${this.cusId} and my name is ${cusName}`
    }

}

let cus=new CustomerDetails("C001","gayan",1234);
console.log(cus.getName("ruwan"));
