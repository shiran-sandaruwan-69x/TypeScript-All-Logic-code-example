"use strict";
// utility types
function updateAssignment(assign, propsToUpdate) {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
}
let assign = {
    studentId: "S001",
    title: "final project",
    grade: 10
};
//console.log(updateAssignment(assign,{verified:true}))
let assignGrade = updateAssignment(assign, { verified: true });
console.log(assignGrade);
// Required and read only
function recodeAssignment(assign) {
    return Object.assign({}, assign);
}
let readOnlyAssignment = recodeAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true }));
// Record
let hexColorMap = {
    red: "FF000",
    green: "FF000",
    blue: "FF000"
};
let finalGrade = {
    sara: "A",
    Lilly: "B"
};
let constData = {
    sara: { assign1: 10, assign2: 20 },
    Lilly: { assign1: 5, assign2: 3 }
};
