
interface TransactionObj2{
    [index:string]:number,
    pizza:-10,
    books:-15,
    job:30
}

// apita interface ekata add karanne nathiwa value danna puluwan object ekata
const todayTransactionObj2:TransactionObj2 = {
    pizza:-10,
    books:-15,
    job:30,
    check:40,
    check2:41,
    check3:42,

}

//console.log(todayTransactionObj2['books']);

// --------------------------------------------------------------------------------------------

interface Strudent {
    [index:string]:number | string | string[] | boolean |undefined,
    stuId:string | string,
    stuName:string,
    gpa?: string[]
}


const student:Strudent ={
    stuId:"S001",
    stuName:"kamal",
    gpa: ["100","200"],
    isActive:true,

}

//console.log(student['stuId']);

// apita object eke thiyana key tika print kara ganna puluwan

// for(let key in student){
//     console.log(`${key} : ${student[key]}`);
    
// }

const student2 = function(stu: Strudent, key: keyof Strudent):void{
    console.log(`${key} : ${stu[key]}`);
}


student2(student,'stuId') // stuId : S001

// --------------------------------------------------------------------------------------------

interface Income{
    [index:string]:string | number
    //[index:'kamal'] meka athulata danna puluwan string and number type deka vitharai 
    // meka wenuwata apita type eka use krnn puluwan interface eka wenuwata 
   // [index:'kamal']:string | number
}

type IncomeType = "stuId" | "stuName" | "age"

type Income2 = Record<IncomeType,string | number> 

const income:Income2 = {
   stuId:200,
   stuName:"kamal",
   age:23
}

// type ekata index signatures nathi nisa apita eka meke key ekak kiyl kiyanna one as keyof Income2
console.log(income['codeId' as keyof Income2]);
