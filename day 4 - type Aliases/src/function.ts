// functions

// apita return type ekak assign karanna puluwan

const add = function(x: number, y: number):number{
    return x+y;
}

// no return types ---------------------------------
const logMeg = (message:any):void=>{
    console.log(message);
}

logMeg("hello my friends");

// if you want to add we can add function into logMeg
logMeg(add(3,4));

//-------------------------------------------------
//type mathFunction=(num1:number , num2:number) =>number 
interface mathFunction{
    (num1:number , num2:number):number
}

let muliFly:mathFunction = function (x,y){
    return x*y;
}

logMeg(muliFly(5,6));

// optional parameters

let sumOf= function(x: number, y: number ,z?: number):number{
    if(typeof z !== "undefined"){
        return x + y + z;
    }
    return x + y;
}

// default param value
let sumAll= function(x: number, y: number ,z: number = 2):number{
        return x + y + z;
}

// Rest parameters ...nums

const total = function(...nums:number[]):number{
    return nums.reduce((prev, curr) => prev + curr)
}

logMeg(total(1,2,3,4)) // anwser = 10

const total2 = function(a:number , ...nums:number[]):number{
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMeg(total2(1,2)) // anwser = 3 a ta ganne pass karana first value eka

// never return type ----------------------------------------------------------------------

const errMsg = function(message:string):never{
    throw new Error(message);
}

//logMeg(errMsg("don't have cus id"))

// -------------------------------------------------------------------------------------------------
const numberOrString = function(value:number | string):string{
    
    if(value === "string") return "string"
    if(value === "number") return "number"

    return errMsg("this should be never happed !");
}

// custom type guard
const isNumber = function(num:any):boolean{
    return (typeof num === "number") ? true : false
}

logMeg(isNumber("s"))



