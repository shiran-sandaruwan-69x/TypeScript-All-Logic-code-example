"use strict";
class Bands {
    constructor() {
        this.datastate = [];
    }
    // get kiyanne spical key word ekak
    get data() {
        return this.datastate;
    }
    set data(values) {
        // Array.isArray(values) meken values walata ena ewa array ekakda kiyla check karanne
        // values.every(el=> typeof el === "string") meken array eke thiyana values string kiyla balanawa
        if (Array.isArray(values) && values.every(el => typeof el === "string")) {
            this.datastate = values;
        }
        else
            throw new Error('param is not an array of string');
    }
}
const myBands = new Bands();
myBands.data = ["kamal", "ruwan", "gayan"];
console.log(myBands.data);
// meken ...myBands.data thiyana data tika copy kara gena concat kara gannawa
myBands.data = [...myBands.data, "gg", "mm", "cc"];
console.log(myBands.data);
