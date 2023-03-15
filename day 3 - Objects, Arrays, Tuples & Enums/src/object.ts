
let myObj:object;

myObj = []

console.log(typeof myObj); // answer eka == object

let kuku = ["Hp",true,1234,false]

myObj=kuku
//-------------------------------------------------------------------------
// create a object

let customers = {
    cusName:"shiran",
    cusAge:23
}

//customers.cusName=1233 // eka default typeScript aran thiyanne string type eka
customers.cusName="kamal"

//------------------------------------------------------
// apita object ekata assign wenna one types wenama assign karala passe ewata data set krnn puluwan

type itemTypes={
    name:string,
    itemId:number,
    itemMixData:(string | number) []
}

let items:itemTypes = {
    name:"rice",
    itemId:1001,
    itemMixData:[1234,1001,200,"dull","banana"]
}

let items2:itemTypes = {
    name:"pan cake",
    itemId:1002,
    itemMixData:[1234,"apple",200,"dull","banana"]
}

items=items2 // meka aulak dekema same types

// apita value ekk assign karanne nathiwa thiyanne one nam itemId eka wage active kiyla balanna ? eka danna puluwan
// ex

type lapTypes={
    lapId:string | number,
    lapName:string,
    lapIp?:string
}


let tapTops:lapTypes ={
    lapId:123,
    lapName:"Hp"
}

// lapIp ekata mokk wath danme na kiyla aulak na 
// ? eken eka active kiyla balala nathnam undifind assign kara gannawa

