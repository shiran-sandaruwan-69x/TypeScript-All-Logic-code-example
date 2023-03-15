"use strict";
let myName;
let myAge;
let isLoading = true;
let album;
let re = /\w+/g;
myName = "shiran";
myAge = 12;
myName = "sandaruwan";
album = false;
console.log(myName, myAge, isLoading, album);
//----------------------------------------------
function sum(x, y) {
    return x + y;
}
let z = sum(2, "dd");
console.log(z);
//---------------------------------
let postId; // this is union type
let isActive;
postId = 'C001';
console.log(postId);
