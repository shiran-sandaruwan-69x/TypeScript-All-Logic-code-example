
let myName:string;
let myAge:number;
let isLoading:boolean=true
let album:any;
let re:RegExp = /\w+/g
let date: Date = new Date("2019-01-16");  

myName="shiran";
myAge=12;
myName="sandaruwan";
album=false

console.log(myName,myAge,isLoading,album);

//----------------------------------------------

function sum(x:number, y:any){
return x+y;
}

let z=sum(2,"dd")
console.log(z);


//---------------------------------
let postId: number | string; // this is union type
let isActive: number | boolean | string

postId='C001';

console.log(postId);


