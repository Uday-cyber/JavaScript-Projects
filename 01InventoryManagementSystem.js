class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

function addItem(inventory, item) {
    inventory.push(item);
}

function updateItem(inventory, id, newDetails) {
    const item = inventory.find(i => i.id === id);
    if (item) {
        Object.assign(item, newDetails);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}

function deleteItem(inventory, id) {
    const index = inventory.findIndex(i => i.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}

function getItem(inventory, id) {
    return inventory.find(i => i.id === id);
}

function printInventory(inventory) {
    console.log("Inventory:");
    inventory.forEach(item => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`);
    });
}

let inventory = [
    new Item(1, "Apple", 10, 8.5),
    new Item(2, "Banana", 20, 0.23)
];

console.log("Initial Inventory:");
printInventory(inventory);

console.log("\nAdding item:");
addItem(inventory, new Item(3, "Orange", 15, 0.7));
printInventory(inventory);

console.log("\nUpdating item:");
updateItem(inventory, 2, { quantity: 30, price: 0.2 });
printInventory(inventory);

console.log("\nDeleting item:");
deleteItem(inventory, 1);
printInventory(inventory);

console.log("\nGetting item:");
const item = getItem(inventory, 3);
console.log(item);
