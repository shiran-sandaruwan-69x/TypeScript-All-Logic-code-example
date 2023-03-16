
const addOrConcat = function(a:number , b:number , c: "add" | "concat"):number | string{
    if(c === 'add') return a + b;
    return '' + a + b 
}

// meke return type eka string nisa error apita eka casting karann puluwan
// string valata convert karann puluwan as string dala

let myVal: string = addOrConcat(2,3,"concat") as string

let nextVal: number = addOrConcat(2,3,"concat") as number

//let num1:string = 10 as string

//console.log(  typeof num1  ); // answer number

// double casting 
let num2: string = (10 as unknown) as string

console.log( typeof num2 ); // answer number

// The DOM

// img elemnt eka apita puluwan dom eke thiyna html element ekak kiyala eke property access karanna

let img = document.getElementById("#img") as HTMLImageElement
img.src

let myImg = document.querySelector("img") as HTMLImageElement

// meka use wenne react wala godakma
let nextImg = <HTMLImageElement> document.getElementById("#img2")
nextImg.src