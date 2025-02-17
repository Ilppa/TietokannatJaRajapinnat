// Luodaa bookArray:n taulukko, jossa on kirjoja ja niiden tietoja
const bookArray = [
    { id_book: 1, name: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565" },
    { id_book: 2, name: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084" },
    { id_book: 3, name: "1984", author: "George Orwell", isbn: "9780451524935" },
    { id_book: 4, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x" },
    { id_book: 5, name: "Photography", author: "Vilppu", isbn: "205711499" },
    { id_book: 6, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039" },
    { id_book: 7, name: "TBA", author: "Zelanshi", isbn: "0534613932" },
    { id_book: 8, name: "Shaping Space", author: "Speight", isbn: "0534613934" },
    { id_book: 9, name: "Art Since 1940", author: "Speight", isbn: "0131839780" },
    { id_book: 10, name: "Make it in Clay", author: "Stokstad", isbn: "0076417011" },
    { id_book: 11, name: "Art History Vol II & ala carte lab", author: "Stokstad", isbn: "205795617" },
    { id_book: 12, name: "Accounting Concepts", author: "Albrecht", isbn: "1111287856" },
    { id_book: 13, name: "Intermediate Accounting", author: "Stice", isbn: "0538479736" },
    { id_book: 14, name: "Management Info Systems", author: "Marakas", isbn: "9780073376813" },
    { id_book: 15, name: "Management", author: "Williams", isbn: "9780757524028" },
    { id_book: 16, name: "Leadership Wisdom of Jesus", author: "Manz", isbn: "9781609940041" },
    { id_book: 17, name: "Business Law Today", author: "Miller", isbn: "9780324786156" },
    { id_book: 18, name: "Management Info Systems", author: "Marakas", isbn: "9780073376813" }
];

// Printataan bookArray:n tyyppi
console.log(typeof bookArray);

// Printataan koko bookArray
console.log(bookArray);

// Printataan bookArray:n ensimmäinen rivi
console.log(bookArray[0]);

// Printataan ekan kirjan nimi
console.log(bookArray[0].name);

// Printataan bookArray:n rivien määrä
console.log(bookArray.length);

// Printataan kaikkien kirjojen nimet
bookArray.forEach(book => console.log(book.name));