import ListItem from "./ListItem";

interface List{
    list:ListItem[],
    load():void,
    save():void,
    clearList():void,
    addItems(listItems:ListItem):void,
    removeItem(id:string):void
}

export default class FullList implements List{

    static instance: FullList = new FullList();
    private __list: ListItem[];

    constructor(list:ListItem[]=[]) {
    this.__list=list;
    }

    get list():ListItem[]{
        return this.__list;
    }

    set list(list:ListItem[]){
        this.__list=list;
    }

    load():void {
        const storedList:string | null = localStorage.getItem("myList")
        if (typeof storedList !== 'string') return
        const parsedList:{id:string,item:string,checked:boolean}[]= JSON.parse(storedList)

        parsedList.forEach(itemObj=>{
            const newItemList=new ListItem(itemObj.id,itemObj.item,itemObj.checked);
            FullList.instance.addItems(newItemList);
        })

    }

    save(): void {
    localStorage.setItem("myList",JSON.stringify(this.__list))
    }

    clearList():void {
        this.__list=[]
        this.save()
    }

    addItems(listItems: ListItem):void {
        this.__list.push(listItems);
        this.save()
    }

    removeItem(id: string) {
        this.__list=this.__list.filter(item=> item.id !== id)
        this.save()
    }


}


