"use strict";
class Peeks {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeks.count;
    }
    static getCount() {
        return Peeks.count;
    }
}
Peeks.count = 0;
const iName = new Peeks("kasun");
console.log(iName.id);
