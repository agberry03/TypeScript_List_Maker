"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
// The List class.
var List = /** @class */ (function () {
    // List constructor.
    function List(name) {
        this.name = name;
        this.items = [];
    }
    // Add a new item to the list.
    List.prototype.addItem = function (itemName) {
        this.items.push(new Item(itemName));
    };
    // Check off an item in the list.
    List.prototype.checkItem = function (itemName) {
        for (var i in this.items) {
            if (this.items[i].name.toLowerCase() == itemName.toLowerCase()) {
                this.items[i].checkOff();
                break;
            }
        }
    };
    // Display all items in the list.
    List.prototype.displayList = function () {
        console.log("\n".concat(this.name, ":\n"));
        for (var i in this.items) {
            process.stdout.write("".concat(parseInt(i) + 1, ". ").concat(this.items[i].name, " "));
            if (this.items[i].checked) {
                console.log("[X]\n");
            }
            else {
                console.log("[ ]\n");
            }
        }
    };
    return List;
}());
// Item class.
var Item = /** @class */ (function () {
    // Item constructor.
    function Item(name) {
        this.name = name;
        this.checked = false;
    }
    // Set checked to true for this item.
    Item.prototype.checkOff = function () {
        this.checked = true;
    };
    return Item;
}());
// Declare an asynchronous input function.
function userInput(question) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    var userInput = prompt(question);
                    resolve(userInput);
                })];
        });
    });
}
// Declare main as a asynchronous function.
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var lists, choice, _a, newList, listName, i, editList, newItem, i, editList, checkItem, i;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    lists = new Array;
                    choice = -1;
                    // Welcome message.
                    console.log("Welcome to the list maker!\n");
                    // Explanation of program.
                    console.log("Create lists, and then add and check off items from those lists.");
                    _b.label = 1;
                case 1:
                    if (!(choice != 0)) return [3 /*break*/, 13];
                    // Prompt message for a choice.
                    console.log("Choose one of the following:\n");
                    // Display a list of user options.
                    console.log("0. Exit the program");
                    console.log("1. Create a new list");
                    console.log("2. Display a list");
                    console.log("3. Add items to a list");
                    console.log("4. Check off items on a list\n");
                    _a = parseInt;
                    return [4 /*yield*/, userInput("Enter a number: ")];
                case 2:
                    // Prompt the user for an input number.
                    choice = _a.apply(void 0, [_b.sent()]);
                    // Blank space.
                    console.log();
                    if (!(choice == 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, userInput("What is the new list's name? ")
                        // Add the newly named list to the lists array.
                    ];
                case 3:
                    newList = _b.sent();
                    // Add the newly named list to the lists array.
                    lists.push(new List(newList));
                    return [3 /*break*/, 12];
                case 4:
                    if (!(choice == 2)) return [3 /*break*/, 6];
                    return [4 /*yield*/, userInput("Which list will you display? ")
                        // Find the list with the inputted name in lists.
                    ];
                case 5:
                    listName = _b.sent();
                    // Find the list with the inputted name in lists.
                    for (i in lists) {
                        // Display the requested list.
                        if (lists[i].name.toLowerCase() == listName.toLowerCase()) {
                            lists[i].displayList();
                        }
                    }
                    return [3 /*break*/, 12];
                case 6:
                    if (!(choice == 3)) return [3 /*break*/, 9];
                    return [4 /*yield*/, userInput("Which list will you edit? ")
                        // Prompt user for the name of the new list item.
                    ];
                case 7:
                    editList = _b.sent();
                    return [4 /*yield*/, userInput("What is the name of the new list item? ")
                        // Add the new item to the list.
                        // Find the list with the inputted name in lists.
                    ];
                case 8:
                    newItem = _b.sent();
                    // Add the new item to the list.
                    // Find the list with the inputted name in lists.
                    for (i in lists) {
                        // Add the item to the requested list.
                        if (lists[i].name.toLowerCase() == editList.toLowerCase()) {
                            lists[i].addItem(newItem);
                        }
                    }
                    return [3 /*break*/, 12];
                case 9:
                    if (!(choice == 4)) return [3 /*break*/, 12];
                    return [4 /*yield*/, userInput("Which list will you edit? ")
                        // Prompt for the item to check off.
                    ];
                case 10:
                    editList = _b.sent();
                    return [4 /*yield*/, userInput("Which item will you check off? ")
                        // Check off the item.
                        // Find the list with the inputted name in lists.
                    ];
                case 11:
                    checkItem = _b.sent();
                    // Check off the item.
                    // Find the list with the inputted name in lists.
                    for (i in lists) {
                        // Add the item to the requested list.
                        if (lists[i].name.toLowerCase() == editList.toLowerCase()) {
                            lists[i].checkItem(checkItem);
                        }
                    }
                    _b.label = 12;
                case 12:
                    // Blank line.
                    console.log();
                    return [3 /*break*/, 1];
                case 13: return [2 /*return*/];
            }
        });
    });
}
// Run main.
main().then(function () {
    // Goodbye Message.
    console.log("\nGoodbye!");
}).catch(function (error) {
    // Print an error message if main can't run.
    console.error("An error occured: ", error);
});
