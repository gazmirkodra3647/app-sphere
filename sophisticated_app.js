// filename: sophisticated_app.js
// This code is a demo of a sophisticated and elaborate JavaScript application

// Class representing a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  getInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
  }
}

// Class representing a Book
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
  }
}

// Class representing a Library
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  displayBooks() {
    console.log("Library Books:");
    this.books.forEach((book) => {
      book.displayInfo();
      console.log("-----------");
    });
  }
}

// Instantiate a Person
const john = new Person("John Doe", 25, "Male");
john.sayHello();

// Instantiate some Books
const book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 176);
const book2 = new Book("Clean Code", "Robert C. Martin", 464);
const book3 = new Book("Design Patterns", "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides", 395);

// Instantiate a Library
const library = new Library();

// Add Books to the Library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Display Books in the Library
library.displayBooks();