let myLibrary = [];
let table = document.getElementById("table");
let tableCreated = 0;
let readButton = document.createElement("button");
readButton.classList.add("readButton");
let removeButton = document.createElement("button")
removeButton.classList.add("removeButton");

function Book(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
}

function addBookToLibrary() {
    let newTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let userRead = document.getElementById("read");
    let haveRead;
    if  (userRead.checked) {
        haveRead = "Read"
    } else {
        haveRead = "Not read"
    } const newBook = new Book(newTitle, newAuthor, haveRead);
    myLibrary.push(newBook);
    closeForm();
    let newestBook = myLibrary[myLibrary.length - 1];
    createRow(newestBook);
}

function createRow(book){
    let newRow = document.createElement("TR");
    table.appendChild(newRow);
    let titleCell = document.createElement("TD");
    let authorCell = document.createElement("TD");
    let readCell = document.createElement("TD");
    let removeCell = document.createElement("TD");
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(readCell);
    readCell.appendChild(readButton);
    newRow.appendChild(removeCell);
    removeCell.appendChild(removeButton);
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    readButton.textContent = book.read;
    removeButton.textContent = "Remove";
};

document.getElementById("submit").onclick = addBookToLibrary;

const addButton = document.getElementById("add");
addButton.addEventListener("click", displayForm);

function displayForm() {
    document.getElementById("form-popup").style.display = "block";
}

const closeButton = document.getElementById("close");
closeButton.addEventListener("click", closeForm);

function closeForm() {
    document.getElementById("form-popup").style.display = "none";
}
