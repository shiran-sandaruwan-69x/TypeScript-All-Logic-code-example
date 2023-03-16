

// index signatures

// interface TransactionObj {
//     pizza: number
//     books:number
//     job:number
// }

interface TransactionObj {
    // index signatures mekata thami kiyanne index signatures kiyla
    [index:string]:number
} 

// apita interface ekata add karanne nathiwa value danna puluwan object ekata
const todayTransactionObj:TransactionObj = {
    pizza:-10,
    books:-15,
    job:30,
    jobId:101,
    code:10001,
    desId:99
}

console.log(todayTransactionObj.pizza);
console.log(todayTransactionObj["pizza"]);


const today = function(todayTran:TransactionObj):number{
    let count=0;
    for(let trans in todayTran){
        count +=todayTran[trans]
    }
    return count;
}
