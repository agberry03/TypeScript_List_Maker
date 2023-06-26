"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline"); // Read lines from user input.
var axios_1 = require("axios");
// Recipe class
var Recipe = /** @class */ (function () {
    function Recipe(title, ingredients, servings, instructions) {
        this.title = title;
        this.ingredients = ingredients;
        this.servings = servings;
        this.instructions = instructions;
    }
    Object.defineProperty(Recipe.prototype, "getTitle", {
        get: function () {
            return "Title: ".concat(this.title, "\n");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "getIngredients", {
        get: function () {
            return "Ingredients: ".concat(this.ingredients, "\n");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "getServings", {
        get: function () {
            return "Serving size: ".concat(this.servings, "\n");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "getInstructions", {
        get: function () {
            return "Instructions: ".concat(this.instructions, "\n");
        },
        enumerable: false,
        configurable: true
    });
    return Recipe;
}());
// const recipe = new Recipe("Placeholder title", "placeholder ingredients", "placeholder servings", "placeholder instructions")
// console.log(`${recipe.getTitle}${recipe.getIngredients}${recipe.getServings}${recipe.getInstructions}`)
// The user input and output.
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Code from stackoverflow by Rodney P. Barbati
// fetch(`https://api-ninjas.com/api/recipe`)
// .then(res => res.json())
// .then((res: Recipe) => {
// });
rl.question('What is the recipe you are looking for? ', function (query) {
    console.log("Results for ".concat(query, ":\n"));
    axios_1.default.get('https://api.api-ninjas.com/v1/recipe', {
        params: { query: query },
        headers: { 'X-Api-Key': 'title' },
    })
        .then(function (response) {
        console.log(response.data);
    })
        .catch(function (error) {
        console.error('Error:', error.response.data);
    });
    rl.close();
});
