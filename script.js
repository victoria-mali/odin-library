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
console.log(addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet"));
