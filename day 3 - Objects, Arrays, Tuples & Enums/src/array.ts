

let stringArray=["kamal","amara","gayan"];

let numberArray=[1996,1997,1998,1999,2000];

let guitars = ["star",1998,"shiran sandaruwan"]

let mixData = ["kamal",true,1998]

//stringArray.push(123) complie error mkd ts type eka string kiyla ganne

//stringArray=numberArray // error type 2 kak nisa

guitars=stringArray // meka aulak na 

let cusName:string []; // string type array ekak
let cusAge:number []; // numbers type array ekak
let cusId:number | string []; // string or number type array ekak

let cusMixData:any []; // any true array ekak

let latTops:string [] = ["HP","DELL","MAC"]
//latTops.push(true) // meka error type eka string nisa

// Tuple // meka thiyana pili welata data enna one nathnam error | values 3 nama thiyanne one aniwaren
let myTuple:[string,number,boolean] = ["shiran",123,true] 