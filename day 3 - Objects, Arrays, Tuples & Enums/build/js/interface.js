"use strict";
// type eka wage thamai karana de = danne na interface walata
let details = function (dataOr) {
    return "hello " + dataOr.orderId;
};
let data = {
    orderId: "G001"
};
//let result = details(data)
//console.log(result);
// apita puluwan if condition ekakata dala meka active kiyla balanne me wage
let details2 = function (dataOr) {
    if (dataOr.orderId) {
        return `order id is : ${dataOr.orderId.toLocaleUpperCase()}`;
    }
    return `no order id !`;
};
console.log(details2(data)); // orderId ekata mokk wath dala thibbe nathnam print wenne na / if coundion false
// return wenne na active d kiyla balanawa
