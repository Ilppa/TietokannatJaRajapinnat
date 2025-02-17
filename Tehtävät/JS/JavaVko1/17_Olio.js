const book = require('./book');

// Metodien testaus
book.getAllBooks();
book.getOneBook(1);
book.addBook(19, "New Book", "New Author", "1234567890");
book.getAllBooks();