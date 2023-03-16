"use strict";
// apita interface ekata add karanne nathiwa value danna puluwan object ekata
const todayTransactionObj2 = {
    pizza: -10,
    books: -15,
    job: 30,
    check: 40,
    check2: 41,
    check3: 42,
};
const student = {
    stuId: "S001",
    stuName: "kamal",
    gpa: ["100", "200"],
    isActive: true,
};
//console.log(student['stuId']);
// apita object eke thiyana key tika print kara ganna puluwan
// for(let key in student){
//     console.log(`${key} : ${student[key]}`);
// }
const student2 = function (stu, key) {
    console.log(`${key} : ${stu[key]}`);
};
student2(student, 'stuId'); // stuId : S001
const income = {
    stuId: 200,
    stuName: "kamal",
    age: 23
};
// type ekata index signatures nathi nisa apita eka meke key ekak kiyl kiyanna one as keyof Income2
console.log(income['codeId']);
