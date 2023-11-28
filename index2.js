/*Task: Design an online bookstore system using object-oriented principles.

Instructions:

Create constructor functions for Book and Author to represent books and authors.

The Author constructor should take name, birthYear, and nationality as arguments.

The Book constructor should take title, author (an Author object), genre, and price as arguments.

Implement methods in the Book prototype:

getBookInfo - to print the book's title, author's name,genre, and price.

Create an online bookstore by creating instances of Book and Author objects.

Display the book details for each book in the bookstore.*/



// Author Constructor
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// Book Constructor
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

// Implementing getBookInfo method in Book prototype
Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log("---------------------------------------");
};

// Creating Author instances
const author1 = new Author("J.K. Rowling", 1965, "British");
const author2 = new Author("George R.R. Martin", 1948, "American");

// Creating Book instances
const book1 = new Book("Harry Potter and the Philosopher's Stone", author1, "Fantasy", 25);
const book2 = new Book("A Game of Thrones", author2, "Fantasy", 30);

// Displaying book details
book1.getBookInfo();
book2.getBookInfo();


