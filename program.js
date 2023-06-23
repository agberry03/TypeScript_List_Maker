"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline"); // Read lines from user input.
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
// fetch(`https://api-ninjas.com/api/recipe`)
// .then(res => res.json())
// .then((res: Recipe) => {
// });
var recipe = new Recipe("Placeholder title", "placeholder ingredients", "placeholder servings", "placeholder instructions");
console.log("".concat(recipe.getTitle).concat(recipe.getIngredients).concat(recipe.getServings).concat(recipe.getInstructions));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What is your name? ', function (name) {
    console.log("Hi ".concat(name, "!"));
    rl.close();
});
