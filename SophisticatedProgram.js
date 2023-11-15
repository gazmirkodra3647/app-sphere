/*
Filename: SophisticatedProgram.js

This code is a sophisticated program written in JavaScript. It demonstrates a complex implementation using various concepts and techniques. The program simulates a virtual online marketplace where users can buy and sell products.

*/

// Global variables
let users = [];
let products = [];

// Classes
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.productsSold = [];
        this.productsBought = [];
    }

    sellProduct(product) {
        this.productsSold.push(product);
        removeProductFromMarket(product);
    }

    buyProduct(product) {
        this.productsBought.push(product);
        addProductToMarket(product);
    }
}

class Product {
    constructor(name, price, seller) {
        this.name = name;
        this.price = price;
        this.seller = seller;
        this.buyer = null;
        this.sold = false;
    }

    sellTo(user) {
        this.buyer = user;
        this.sold = true;
        user.buyProduct(this);
    }
}

// Functions
function initializeUsers() {
    users.push(new User("JohnDoe", "johndoe@example.com"));
    users.push(new User("JaneSmith", "janesmith@example.com"));
    // Add more users...
}

function initializeProducts() {
    products.push(new Product("iPhone 12", 999, users[0]));
    products.push(new Product("Samsung Galaxy S21", 899, users[1]));
    // Add more products...
}

function removeProductFromMarket(product) {
    const index = products.findIndex(p => p === product);
    if (index !== -1) {
        products.splice(index, 1);
    }
}

function addProductToMarket(product) {
    products.push(product);
}

// Program execution
initializeUsers();
initializeProducts();

// Example usage
console.log(`Initial number of products on the market: ${products.length}`);

const john = users[0];
const jane = users[1];
const iphone = products[0];
const galaxy = products[1];

john.sellProduct(iphone);
iphone.sellTo(jane);

console.log(`Number of products on the market after one product is sold: ${products.length}`);
console.log(`John's sold products: ${john.productsSold.length}`);
console.log(`Jane's bought products: ${jane.productsBought.length}`);
console.log(`iPhone's buyer is Jane: ${iphone.buyer === jane}`);