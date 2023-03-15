"use strict";
let myObj;
myObj = [];
console.log(typeof myObj); // answer eka == object
let kuku = ["Hp", true, 1234, false];
myObj = kuku;
//-------------------------------------------------------------------------
// create a object
let customers = {
    cusName: "shiran",
    cusAge: 23
};
//customers.cusName=1233 // eka default typeScript aran thiyanne string type eka
customers.cusName = "kamal";
let items = {
    name: "rice",
    itemId: 1001,
    itemMixData: [1234, 1001, 200, "dull", "banana"]
};
let items2 = {
    name: "pan cake",
    itemId: 1002,
    itemMixData: [1234, "apple", 200, "dull", "banana"]
};
items = items2; // meka aulak dekema same types
let tapTops = {
    lapId: 123,
    lapName: "Hp"
};
// lapIp ekata mokk wath danme na kiyla aulak na 
// ? eken eka active kiyla balala nathnam undifind assign kara gannawa
