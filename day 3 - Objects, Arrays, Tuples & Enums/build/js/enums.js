"use strict";
// Enum
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));
console.log(Grade.A); // answer eka == 0 enne
console.log(Grade.B); // answer eka == 1 enne
console.log(Grade.C); // answer eka == 2 enne
console.log(Grade.D); // answer eka == 3 enne
// -----------------------------------------------------------------------
// uda A thiyana number eka anuwa pahala ekak ekathu wei wei yanne
var Grade2;
(function (Grade2) {
    Grade2[Grade2["A"] = 4] = "A";
    Grade2[Grade2["B"] = 5] = "B";
    Grade2[Grade2["C"] = 6] = "C";
    Grade2[Grade2["D"] = 7] = "D";
})(Grade2 || (Grade2 = {}));
console.log(Grade2.A); // answer eka == 4 enne
console.log(Grade2.B); // answer eka == 5 enne
console.log(Grade2.C); // answer eka == 6 enne
console.log(Grade2.D); // answer eka == 7 enne
// -----------------------------------------------------------------------
var Grade3;
(function (Grade3) {
    Grade3[Grade3["A"] = 44] = "A";
    Grade3[Grade3["B"] = 33] = "B";
    Grade3[Grade3["C"] = 55] = "C";
    Grade3[Grade3["D"] = 99] = "D";
})(Grade3 || (Grade3 = {}));
console.log(Grade3.A); // answer eka == 44 enne
console.log(Grade3.B); // answer eka == 33 enne
console.log(Grade3.C); // answer eka == 55 enne
console.log(Grade3.D); // answer eka == 99 enne
