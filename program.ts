import * as readline from 'readline'; // Read lines from user input.
import axios from 'axios';

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

// const recipe = new Recipe("Placeholder title", "placeholder ingredients", "placeholder servings", "placeholder instructions")

// console.log(`${recipe.getTitle}${recipe.getIngredients}${recipe.getServings}${recipe.getInstructions}`)

// The user input and output.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Code from stackoverflow by Rodney P. Barbati
// fetch(`https://api-ninjas.com/api/recipe`)
// .then(res => res.json())
// .then((res: Recipe) => {
    
// });

rl.question('What is the recipe you are looking for? ', (query) => {
    console.log(`Results for ${query}:\n`);

    // Provided by ChatGPT in response to an error involving $.jquery.
    // It suggested using axios instead.
    axios.get('https://api.api-ninjas.com/v1/recipe', {
        params: { query: query },
        headers: { 'X-Api-Key': 'title' },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error:', error.response.data);
        });

        // Add code for selecting one of the search results after getting an API key.

    rl.close();
  });

