

// utility types

// partial

interface Assignment{
    studentId:string,
    title:string,
    grade:number,
    verified?:boolean
}

function updateAssignment(assign:Assignment, propsToUpdate:Partial<Assignment>):Assignment{
    return {...assign,...propsToUpdate}
}

let assign ={
    studentId:"S001",
    title:"final project",
    grade:10
}

//console.log(updateAssignment(assign,{verified:true}))
let assignGrade:Assignment = updateAssignment(assign,{verified:true})
console.log(assignGrade)

// Required and read only

function recodeAssignment(assign:Required<Assignment>):Assignment{
    return {...assign}
}

let readOnlyAssignment:Readonly<Assignment> = recodeAssignment({...assignGrade,verified:true});

// Record

let hexColorMap : Record<string, string> ={
    red:"FF000",
    green:"FF000",
    blue:"FF000"
}

type Students = "sara" | "Lilly"
type LetterGrade = "A" | "B" | "C" | "D"

let finalGrade: Record<Students, LetterGrade> ={
    sara:"A",
    Lilly:"B"
}

interface Grades {
    assign1: number,
    assign2: number,
}

let constData:Record<Students, Grades>={
    sara:{assign1:10,assign2:20},
    Lilly:{assign1:5,assign2:3}
}
