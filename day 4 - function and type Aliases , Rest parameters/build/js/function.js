"use strict";
// functions
// apita return type ekak assign karanna puluwan
const add = function (x, y) {
    return x + y;
};
// no return types ---------------------------------
const logMeg = (message) => {
    console.log(message);
};
logMeg("hello my friends");
// if you want to add we can add function into logMeg
logMeg(add(3, 4));
let muliFly = function (x, y) {
    return x * y;
};
logMeg(muliFly(5, 6));
// optional parameters
let sumOf = function (x, y, z) {
    if (typeof z !== "undefined") {
        return x + y + z;
    }
    return x + y;
};
// default param value
let sumAll = function (x, y, z = 2) {
    return x + y + z;
};
// Rest parameters ...nums
const total = function (...nums) {
    return nums.reduce((prev, curr) => prev + curr);
};
logMeg(total(1, 2, 3, 4)); // anwser = 10
const total2 = function (a, ...nums) {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMeg(total2(1, 2)); // anwser = 3 a ta ganne pass karana first value eka
// never return type ----------------------------------------------------------------------
const errMsg = function (message) {
    throw new Error(message);
};
//logMeg(errMsg("don't have cus id"))
// -------------------------------------------------------------------------------------------------
const numberOrString = function (value) {
    if (value === "string")
        return "string";
    if (value === "number")
        return "number";
    return errMsg("this should be never happed !");
};
// custom type guard
const isNumber = function (num) {
    return (typeof num === "number") ? true : false;
};
logMeg(isNumber("s"));
