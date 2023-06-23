import * as readline from 'readline'; // Read lines from user input.

// Recipe class
class Recipe {
    title: string
    ingredients: string
    servings: string
    instructions: string
    constructor(title: string, ingredients: string, servings: string, instructions: string) {
        this.title = title
        this.ingredients = ingredients
        this.servings = servings
        this.instructions = instructions
    }

    get getTitle(): string {
        return `Title: ${this.title}\n`
    }
    get getIngredients(): string {
        return `Ingredients: ${this.ingredients}\n`
    }
    get getServings(): string {
        return `Serving size: ${this.servings}\n`
    }
    get getInstructions(): string {
        return `Instructions: ${this.instructions}\n`
    }
}

// Code from stackoverflow by Rodney P. Barbati
// fetch(`https://api-ninjas.com/api/recipe`)
// .then(res => res.json())
// .then((res: Recipe) => {
// });


const recipe = new Recipe("Placeholder title", "placeholder ingredients", "placeholder servings", "placeholder instructions")

console.log(`${recipe.getTitle}${recipe.getIngredients}${recipe.getServings}${recipe.getInstructions}`)


// The user input and output.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('What is the recipe you are looking for? ', (name) => {
    console.log(`Hi ${name}!`);
    rl.close();
  });