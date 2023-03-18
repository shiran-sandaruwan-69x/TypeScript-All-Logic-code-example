import './css/style.css'
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = function ():void{

    const fullList = FullList.instance
    const template = ListTemplate.instance

    const itemFormEntity = document.getElementById("itemEntryForm") as HTMLFormElement

    itemFormEntity.addEventListener("submit",function (e){
        e.preventDefault()

        // Get the new item value
        const input = document.getElementById("newItem") as HTMLInputElement
        const newEntityTest:string = input.value.trim()
        if(!newEntityTest.length) return

        // calculate item ID
        const itemId: number = fullList.list.length
            ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
            : 1

        // create new item
        const newItem = new ListItem(itemId.toString(),newEntityTest)
        // Add new item to full list
        fullList.addItems(newItem)
        // Re-render list with new item included
        template.render(fullList)

    })

    const clearBtn = document.getElementById("clearItemsButton") as HTMLButtonElement
    clearBtn.addEventListener("click",function ():void{
        fullList.clearList()
        template.clear()
    })

    fullList.load()
    template.render(fullList);

}

document.addEventListener("DOMContentLoaded",initApp)
