class List {
    name: string
    items: Array<Item>
    constructor(name:string) {
        this.name = name
        this.items = []
    }
    addItem(itemName:string) {
        this.items.push(new Item(itemName))
    }
    checkItem(itemName:string) {
        for (let i in this.items) {
            if (this.items[i].name == itemName) {
                this.items[i].checkOff()
                break
            }
        }
    }
    displayList() {
        console.log(`${this.name}:\n`)
        for (let i in this.items) {
            process.stdout.write(`${parseInt(i)+1}. ${this.items[i].name} `)
            if (this.items[i].checked) {
                console.log(`[X]\n`)
            }
            else {
                console.log(`[ ]\n`)
            }
        }
    }
}

class Item {
    checked: boolean
    name: string
    constructor(name:string) {
        this.name = name
        this.checked = false
    }
    checkOff() {
        this.checked = true
    }
}

const myList = new List("TestList")

myList.displayList()
myList.addItem("Do laundry")
myList.addItem("Practice drawing")
myList.displayList()
myList.checkItem("Do laundry")
myList.displayList()