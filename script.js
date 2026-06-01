const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    return myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("Game of Thrones", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Smth else", "J.R.R. Tolkien", 295, false);



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
      if (book.read === true) {
      ifReadInput.checked = true;
    } else {
      ifReadInput.checked = false;
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Remove the book";


    bookCard.setAttribute('data-id', book.id);
 

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(ifRead);
    bookCard.appendChild(deleteBtn);
    ifRead.appendChild(ifReadLabel);
    ifRead.appendChild(ifReadInput);
    library.appendChild(bookCard);



    const removeItem = (event) => {
        let book = event.currentTarget.parentNode;
        console.log(book);
        let bookId = book.getAttribute('data-id') // extracting the data attribute
        console.log(bookId);
        book.remove();
       // let itemIndex = myLibrary.indexOf(bookId);
        let itemIndex = myLibrary.findIndex(x => x.id === bookId);
        console.log(itemIndex);
        myLibrary.splice(itemIndex, 1);
    }

    deleteBtn.addEventListener("click", removeItem);
  });

  

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});


let formTitle = document.getElementById("form-title");
let formAuthor = document.getElementById("form-author");
let formPages = document.getElementById("form-pages");
let formRead = document.getElementById("form-read");


// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(formTitle.value, formAuthor.value, formPages.value, formRead.value); // Have to send the select box value here.
  });

  favDialog.addEventListener("close", (e) => {
    addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, formRead.value);
    
    if (formTitle.value != "" && formAuthor.value != "" && formPages.value != "") {
        showBookInLibrary()
  formTitle.value = "";
  formAuthor.value = "";
  formPages.value = "";
  formRead.checked = false;
    }

});


function showBookInLibrary() {
    const bookCard = document.createElement('div');
    bookCard.classList.add("book-card");

    const bookTitle = document.createElement('h2');
    bookTitle.classList.add("book-title");
    bookTitle.textContent = formTitle.value;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = formAuthor.value;

    const bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    bookPages.textContent = formPages.value;

    const ifRead = document.createElement("div");
      const ifReadLabel = document.createElement("label");
          ifReadLabel.htmlFor = "if-read";
          ifReadLabel.textContent="Already read?";
      const ifReadInput = document.createElement("input");
          ifReadInput.id = "if-read";
          ifReadInput.name = "if-read";
          ifReadInput.type = "checkbox";
    if (formRead.checked === true) {
      ifReadInput.checked = true;
    } else {
      ifReadInput.unchecked = false;
    }

        const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Remove the book";
    


    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(ifRead);
    bookCard.appendChild(deleteBtn);
    ifRead.appendChild(ifReadLabel);
    ifRead.appendChild(ifReadInput);
    library.appendChild(bookCard);
}

