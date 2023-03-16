"use strict";
const addOrConcat = function (a, b, c) {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// meke return type eka string nisa error apita eka casting karann puluwan
// string valata convert karann puluwan as string dala
let myVal = addOrConcat(2, 3, "concat");
let nextVal = addOrConcat(2, 3, "concat");
//let num1:string = 10 as string
//console.log(  typeof num1  ); // answer number
// double casting 
let num2 = 10;
console.log(typeof num2); // answer number
// The DOM
// img elemnt eka apita puluwan dom eke thiyna html element ekak kiyala eke property access karanna
let img = document.getElementById("#img");
img.src;
let myImg = document.querySelector("img");
// meka use wenne react wala godakma
let nextImg = document.getElementById("#img2");
nextImg.src;
