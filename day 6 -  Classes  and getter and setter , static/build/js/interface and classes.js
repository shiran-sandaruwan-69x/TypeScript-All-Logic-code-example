"use strict";
class CustomerDetails {
    constructor(cusId, cusName, cusSalary) {
        this.cusId = cusId;
        this.cusName = cusName;
        this.cusSalary = cusSalary;
    }
    getName(cusName) {
        return `my cus id is ${this.cusId} and my name is ${cusName}`;
    }
}
let cus = new CustomerDetails("C001", "gayan", 1234);
console.log(cus.getName("ruwan"));
