const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
    let newBook = new Book(title, author, pages, read);
    return myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
addBookToLibrary("Game of Thrones", "J.R.R. Tolkien", 295, "not read yet");
addBookToLibrary("Smth else", "J.R.R. Tolkien", 295, "not read yet");




const bookTitle = document.querySelectorAll(".book-title");

const bookTitles = [];

for (let i = 0; i < myLibrary.length; i++) {
        bookTitles.push(myLibrary[i].title);
    }


const library = document.querySelector(".library");
const books = document.createElement('div');
books.classList.add("book");

// const ul = document.createElement('div');

//const data = ['About', 'Menu', 'Contact'];

bookTitles.forEach(title => {
  const bookTitle = document.createElement('h2');
  bookTitle.textContent = title;
  books.append(bookTitle);
});

library.appendChild(books);

/* for (let i = 0; i < bookTitles.length; i++) {
    bookTitle.textContent = bookTitles[i];
}
 */

/* bookTitle.forEach(book => {
    for (let i = 0; i < myLibrary.length; i++) {
        book.textContent = myLibrary[i].title;
        console.log(myLibrary[i].title);
    }
}); */


/* bookTitle.forEach(book => {
        book.textContent = "hey";
}); */
