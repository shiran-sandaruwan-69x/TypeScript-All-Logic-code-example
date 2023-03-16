"use strict";
// index signatures
// apita interface ekata add karanne nathiwa value danna puluwan object ekata
const todayTransactionObj = {
    pizza: -10,
    books: -15,
    job: 30,
    jobId: 101,
    code: 10001,
    desId: 99
};
console.log(todayTransactionObj.pizza);
console.log(todayTransactionObj["pizza"]);
const today = function (todayTran) {
    let count = 0;
    for (let trans in todayTran) {
        count += todayTran[trans];
    }
    return count;
};
