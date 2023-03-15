
// Enum

enum Grade{
    A,
    B,
    C,
    D
}

console.log(Grade.A); // answer eka == 0 enne
console.log(Grade.B); // answer eka == 1 enne
console.log(Grade.C); // answer eka == 2 enne
console.log(Grade.D); // answer eka == 3 enne

// -----------------------------------------------------------------------
// uda A thiyana number eka anuwa pahala ekak ekathu wei wei yanne
enum Grade2{
    A=4,
    B,
    C,
    D
}
console.log(Grade2.A); // answer eka == 4 enne
console.log(Grade2.B); // answer eka == 5 enne
console.log(Grade2.C); // answer eka == 6 enne
console.log(Grade2.D); // answer eka == 7 enne

// -----------------------------------------------------------------------

enum Grade3{
    A=44,
    B=33,
    C=55,
    D=99
}

console.log(Grade3.A); // answer eka == 44 enne
console.log(Grade3.B); // answer eka == 33 enne
console.log(Grade3.C); // answer eka == 55 enne
console.log(Grade3.D); // answer eka == 99 enne