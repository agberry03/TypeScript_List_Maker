var List = /** @class */ (function () {
    function List(name) {
        this.name = name;
        this.items = [];
    }
    List.prototype.addItem = function (itemName) {
        this.items.push(new Item(itemName));
    };
    List.prototype.checkItem = function (itemName) {
        for (var i in this.items) {
            if (this.items[i].name == itemName) {
                this.items[i].checkOff();
                break;
            }
        }
        console.log("List item not found.\n");
    };
    List.prototype.displayList = function () {
        console.log("".concat(this.name, "\n"));
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
var Item = /** @class */ (function () {
    function Item(name) {
        this.name = name;
        this.checked = false;
    }
    Item.prototype.checkOff = function () {
        this.checked = true;
    };
    return Item;
}());
var myList = new List("TestList");
myList.displayList();
myList.addItem("Do laundry");
myList.addItem("Practice drawing");
myList.displayList();
myList.checkItem("Do laundry");
myList.displayList();
