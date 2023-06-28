import * as promptSync from 'prompt-sync'
const prompt = promptSync();

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

// Declare array of lists.
let lists = new Array<List>
let choice = -1

while (choice != 0) {
    // Display a list of user options.
console.log(`0. Exit the program`)
console.log(`1. Create a new list`)
console.log(`2. Display a list`)
console.log(`3. Add items to a list`)
console.log(`4. Check off items on a list\n`)

// Prompt the user for an input number.
choice = parseInt(prompt(`Enter a number: `))

// Continue while the user doesn't enter 0.

// Create a new list.
if (choice == 1) {
    // Prompt user for the list's name.
    process.stdout.write(`What is the new list's name? `)

    // Add the newly named list to the lists array.
    lists.push(new List(`placeholder list`))
}
// Display a list.
else if (choice == 2) {
    // Prompt user for the list to display.
    process.stdout.write(`Which list will you display? `)

    // Display the requested list.
    lists[0].displayList()
}
// Add items to a list.
else if (choice == 3) {
    // Prompt user for the list to edit.
    process.stdout.write(`Which list will you edit? `)

    // Prompt user for the name of the new list item.
    process.stdout.write(`What is the name of the new list item? `)

    // Add the new item to the list.
    lists[0].addItem(`placeholder item`)
}
// Check off an item on a list.
else if (choice == 4) {
    // Prompt user for the list to edit.
    process.stdout.write(`Which list will you edit? `)

    // Prompt for the item to check off.
    process.stdout.write(`Which item will you check off? `)

    // Check off the item.
    lists[0].checkItem(`placeholder item`)
}
}

