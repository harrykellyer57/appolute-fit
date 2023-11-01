Here's a JavaScript code example that meets your requirements. The code is a simulation of a library management system, including features for adding books, searching, borrowing, and returning them.

```javascript
// library-management-system.js

// Book class representing a book item
class Book {
  constructor(title, author, publicationYear, available) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.available = available;
  }
}

// Library class representing the library and its operations
class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, publicationYear) {
    const book = new Book(title, author, publicationYear, true);
    this.books.push(book);
  }

  searchBook(query) {
    query = query.toLowerCase();
    const searchResults = [];
    for (const book of this.books) {
      if (
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.publicationYear.toString().includes(query)
      ) {
        searchResults.push(book);
      }
    }
    return searchResults;
  }

  borrowBook(title) {
    for (const book of this.books) {
      if (book.title === title && book.available) {
        book.available = false;
        return true; // Successfully borrowed the book
      }
    }
    return false; // Book not available or not found
  }

  returnBook(title) {
    for (const book of this.books) {
      if (book.title === title && !book.available) {
        book.available = true;
        return true; // Successfully returned the book
      }
    }
    return false; // Book not borrowed or not found
  }
}

// Example usage
const library = new Library();

// Adding books to the library
library.addBook('The Catcher in the Rye', 'J.D. Salinger', 1951);
library.addBook('To Kill a Mockingbird', 'Harper Lee', 1960);
library.addBook('1984', 'George Orwell', 1949);
// ... Add more books

// Searching for books
const searchResults = library.searchBook('mockingbird');
console.log('Search Results:');
for (const book of searchResults) {
  console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
}

// Borrowing a book
const bookTitle = 'The Catcher in the Rye';
const borrowSuccessful = library.borrowBook(bookTitle);
if (borrowSuccessful) {
  console.log(`Successfully borrowed "${bookTitle}"`);
} else {
  console.log(`Unable to borrow "${bookTitle}"`);
}

// Returning a book
const returnSuccessful = library.returnBook(bookTitle);
if (returnSuccessful) {
  console.log(`Successfully returned "${bookTitle}"`);
} else {
  console.log(`Unable to return "${bookTitle}"`);
}
```

This code demonstrates a library management system with book addition, searching, borrowing, and returning functionalities. The `Library` class manages the collection of books (`Book` objects) and provides methods for performing operations on the library. The example usage at the end showcases how to utilize these features by adding books, searching for a book, borrowing it, and returning it.