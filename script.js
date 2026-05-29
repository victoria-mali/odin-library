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



const library = document.querySelector(".library");


myLibrary.forEach(book => {
  const bookCard = document.createElement('div');
  bookCard.classList.add("book-card");

  const bookTitle = document.createElement('h2');
  bookTitle.classList.add("book-title");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = book.author;

  const bookPages = document.createElement("p");
  bookPages.classList.add("book-pages");
  bookPages.textContent = book.pages;

  const ifRead = document.createElement("div");
    const ifReadLabel = document.createElement("label");
        ifReadLabel.htmlFor = "if-read";
        ifReadLabel.textContent="Already read?";
    const ifReadInput = document.createElement("input");
        ifReadInput.id = "if-read";
         ifReadInput.name = "if-read";
        ifReadInput.type = "checkbox";

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(ifRead);
  ifRead.appendChild(ifReadLabel);
  ifRead.appendChild(ifReadInput);
  library.appendChild(bookCard);
});

/* bookTitles.forEach(title => {
  const books = document.createElement('div');
  books.classList.add("book");
  const bookTitle = document.createElement('h2');
  bookTitle.textContent = title;
  books.append(bookTitle);
  library.appendChild(books);
}); */



