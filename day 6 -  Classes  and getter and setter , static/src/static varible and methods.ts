
class Peeks {
    static count:number =0

    public id:number

    constructor(public name:string){
        this.name=name;
        this.id= ++Peeks.count
    }

    static getCount():number{
       return Peeks.count
    }

}

const iName=new Peeks("kasun");
console.log(iName.id)
