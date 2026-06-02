const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

const library = document.querySelector(".library");

const removeItem = (event) => {
        let book = event.currentTarget.parentNode;
        console.log(book);
        let bookId = book.getAttribute('data-id')
        console.log(bookId);
        book.remove();
        let itemIndex = myLibrary.findIndex(x => x.id === bookId);
        console.log(itemIndex);
        myLibrary.splice(itemIndex, 1);
    }



function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add("book-card");

    const bookCardContainer = document.createElement('div');
    bookCard.classList.add("book-card-container");

    const bookTitle = document.createElement('h2');
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    bookPages.textContent = book.pages + " pages";

    const ifRead = document.createElement("div");
    ifRead.classList.add("book-read");
      const ifReadLabel = document.createElement("label");
      ifReadLabel.classList.add("book-read-label");
          ifReadLabel.htmlFor = "if-read";
          ifReadLabel.textContent="Already read?";
      const ifReadInput = document.createElement("input");
      ifReadInput.classList.add("book-read-input");
          ifReadInput.id = "if-read";
          ifReadInput.name = "if-read";
          ifReadInput.type = "checkbox";

      if (book.read === true) {
      ifReadInput.checked = true;
    } else {
      ifReadInput.checked = false;
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Remove";


    library.appendChild(bookCard);
    bookCard.setAttribute('data-id', book.id);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookCardContainer);
    bookCardContainer.appendChild(bookAuthor);
    bookCardContainer.appendChild(bookPages);
    bookCardContainer.appendChild(ifRead);
    bookCardContainer.appendChild(deleteBtn);
    ifRead.appendChild(ifReadInput);
    ifRead.appendChild(ifReadLabel);


    
    deleteBtn.addEventListener("click", removeItem);

    ifReadInput.addEventListener("change", (event) => {
        let book = event.currentTarget.parentNode;
        let bookId = book.getAttribute('data-id');
        let itemIndex = myLibrary.findIndex(x => x.id === bookId);
        let item = myLibrary[itemIndex];
        item.toggleRead();
    });
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    createBookCard(newBook);
    return myLibrary.push(newBook);
}


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 186, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 376, false);


const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");


showButton.addEventListener("click", () => {
  favDialog.showModal();
});


let formTitle = document.getElementById("form-title");
let formAuthor = document.getElementById("form-author");
let formPages = document.getElementById("form-pages");
let formRead = document.getElementById("form-read");


confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  favDialog.close(formTitle.value, formAuthor.value, formPages.value, formRead.checked); 
  });

  favDialog.addEventListener("close", (e) => {
  if (formTitle.value != "" && formAuthor.value != "" && formPages.value != "") {
      addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, formRead.checked)
  formTitle.value = "";
  formAuthor.value = "";
  formPages.value = "";
  formRead.checked = false;
    }
});
