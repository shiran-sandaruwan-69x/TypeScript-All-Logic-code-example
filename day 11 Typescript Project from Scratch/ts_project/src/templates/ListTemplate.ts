import FullList from "../model/FullList";

interface DOMList{
    ul:HTMLUListElement,
    clear():void,
    render(fullList:FullList):void
}

export default class ListTemplate implements DOMList{

    static instance:ListTemplate = new ListTemplate();
    ul:HTMLUListElement


    private constructor() {
        this.ul=document.getElementById("listItems") as HTMLUListElement
    }

    clear():void {
        this.ul.innerHTML=''
    }

    render(fullList: FullList):void {
        this.clear()
        fullList.list.forEach(item=>{
            const li= document.createElement('li') as HTMLLIElement
            li.className = 'items'

            const check = document.createElement("input") as HTMLInputElement
            check.type = "checkbox"
            check.id= item.id
            check.checked = item.checked
            check.tabIndex=0
            li.append(check)

            check.addEventListener('change',function (){
                item.checked = !item.checked
                fullList.save()
            })

            const label = document.createElement('label') as HTMLLabelElement
            label.htmlFor=item.id
            label.textContent=item.item
            li.append(label)

            const button = document.createElement('button') as HTMLButtonElement
            button.className='button'
            button.textContent='X'
            li.append(button)

            button.addEventListener('click',function (){
                fullList.removeItem(item.id)
                // @ts-ignore
                this.render(fullList)
            })
            this.ul.append(li);
        })
    }

}
