import * as promptSync from 'prompt-sync'
const prompt = promptSync();

// The List class.
class List {
    // List attributes.
    name: string
    items: Array<Item>
    // List constructor.
    constructor(name:string) {
        this.name = name
        this.items = []
    }
    // Add a new item to the list.
    addItem(itemName:string) {
        this.items.push(new Item(itemName))
    }
    // Check off an item in the list.
    checkItem(itemName:string) {
        for (let i in this.items) {
            if (this.items[i].name.toLowerCase() == itemName.toLowerCase()) {
                this.items[i].checkOff()
                break
            }
        }
    }
    // Display all items in the list.
    displayList() {
        console.log(`\n${this.name}:\n`)
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

// Item class.
class Item {
    // Item attributes.
    checked: boolean
    name: string
    // Item constructor.
    constructor(name:string) {
        this.name = name
        this.checked = false
    }
    // Set checked to true for this item.
    checkOff() {
        this.checked = true
    }
}

// Declare an asynchronous input function.
async function userInput(question:string): Promise<string> {
    return new Promise<string>((resolve) => {
        const userInput = prompt(question)
        resolve(userInput)
    })
}

// Declare main as a asynchronous function.
async function main() {
    // Declare array of lists.
    let lists = new Array<List>
    let choice = -1

    // Welcome message.
    console.log(`Welcome to the list maker!\n`)

    // Explanation of program.
    console.log(`Create lists, and then add and `)
    console.log(`check off items from those lists.`)

    // Continue while the user doesn't enter 0 for choice.
    while (choice != 0) {
        // Prompt message for a choice.
        console.log(`Choose one of the following:\n`)
        // Display a list of user options.
        console.log(`0. Exit the program`)
        console.log(`1. Create a new list`)
        console.log(`2. Display a list`)
        console.log(`3. Add items to a list`)
        console.log(`4. Check off items on a list\n`)

        // Prompt the user for an input number.
        choice = parseInt(await userInput(`Enter a number: `))

        // Blank space.
        console.log()

        // Create a new list.
        if (choice == 1) {
            // Prompt user for the list's name.
            let newList = await userInput(`What is the new list's name? `)

            // Add the newly named list to the lists array.
            lists.push(new List(newList))
            // Print message to the user indicating the list was added.
            console.log(`\n${newList} was created.`)
        }
        // Display a list.
        else if (choice == 2) {
            // Prompt user for the list to display.
            let listName = await userInput(`Which list will you display? `)

            // Find the list with the inputted name in lists.
            for (let i in lists) {
                // Display the requested list.
                if (lists[i].name.toLowerCase() == listName.toLowerCase()) {
                    lists[i].displayList()
                }
            }
        }
        // Add items to a list.
        else if (choice == 3) {
            // Prompt user for the list to edit.
            let editList = await userInput(`Which list will you edit? `)

            // Prompt user for the name of the new list item.
            let newItem = await userInput(`What is the name of the new list item? `)

            // Add the new item to the list.
            // Find the list with the inputted name in lists.
            for (let i in lists) {
                // Add the item to the requested list.
                if (lists[i].name.toLowerCase() == editList.toLowerCase()) {
                    lists[i].addItem(newItem)
                    // Print message to the user indicating the item was added.
                    console.log(`\n${newItem} was added to ${editList}.`)
                }
            }
        }
        // Check off an item on a list.
        else if (choice == 4) {
            // Prompt user for the list to edit.
            let editList = await userInput(`Which list will you edit? `)

            // Prompt for the item to check off.
            let checkItem = await userInput(`Which item will you check off? `)

            // Check off the item.
                // Find the list with the inputted name in lists.
                for (let i in lists) {
                    // Add the item to the requested list.
                    if (lists[i].name.toLowerCase() == editList.toLowerCase()) {
                        lists[i].checkItem(checkItem)
                        // Print message to the user indicating the item was added.
                        console.log(`\n${checkItem} in ${editList} was checked off.`)
                    }
                }
            }
            // Blank line.
            console.log()
    }
}

// Run main.
main().then(() => {
    // Goodbye Message.
    console.log("\nGoodbye!")
}).catch((error) => {
    // Print an error message if main can't run.
    console.error(`An error occured: `, error)
})
