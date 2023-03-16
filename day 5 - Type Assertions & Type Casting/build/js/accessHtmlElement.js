"use strict";
// orginal js code 
// let year = document.getElementById("#year")
// let thisYear = new Date().getFullYear();
// year.setAttribute("datetime",thisYear)
// year.textContent=thisYear
// 1 ts code -----------------------------------------------------------------------
// let year: HTMLElement | null
// let thisYear: string
// year = document.getElementById("#year")
// thisYear= new Date().getFullYear().toString()
// if(year){
//     year.setAttribute("datetime",thisYear)
//     year.textContent=thisYear
// }
// 2 ts code ------------------------------------------------------------------
const year = document.getElementById("#year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
