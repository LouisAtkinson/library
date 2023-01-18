let myLibrary = [];
let table = document.getElementById("table");
let tableCreated = 0;

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

document.getElementById("submit").onclick = addBookToLibrary;

function addBookToLibrary() {
  let newTitle = document.getElementById("title").value;
  let newAuthor = document.getElementById("author").value;
  let userRead = document.getElementById("read");
  let haveRead;
  if (newTitle.length === 0 || newAuthor.length === 0) {
    alert("Please enter the title and author");
    return;
  }
  if (userRead.checked) {
    haveRead = "Read";
  } else {
    haveRead = "Not read";
  }
  const newBook = new Book(newTitle, newAuthor, haveRead);
  myLibrary.push(newBook);
  closeForm();
  let newestBook = myLibrary[myLibrary.length - 1];
  createRow(newestBook);
}

function createRow(book) {
  let newRow = document.createElement("TR");
  table.appendChild(newRow);
  let titleCell = document.createElement("TD");
  let authorCell = document.createElement("TD");
  let readCell = document.createElement("TD");
  let removeCell = document.createElement("TD");
  let readButton = document.createElement("button");
  readButton.classList.add("readButton");
  let removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
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
  if (readButton.textContent === "Read") {
    readButton.style.backgroundColor = "var(--button-color)";
  } else {
    readButton.style.backgroundColor = "red";
  } readButton.addEventListener("click", () => {
    let targetTitle =
      readButton.parentNode.previousElementSibling.previousElementSibling
        .innerHTML;
    if (readButton.textContent === "Read") {
      readButton.style.backgroundColor = "red";
      readButton.textContent = "Not read";
    } else {
      readButton.style.backgroundColor = "var(--button-color)";
      readButton.textContent = "Read";
    }
    changeRead(findBook(myLibrary, targetTitle));
  })
  removeButtons();
}

function removeButtons() {
  let removeButtons = document.querySelectorAll(".removeButton");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", () => {
      let targetTitle =
        removeButton.parentNode.previousElementSibling.previousElementSibling
          .previousElementSibling.innerHTML;
      removeBook(findBook(myLibrary, targetTitle));
      let targetRow = removeButton.closest("tr");
      targetRow.parentNode.removeChild(targetRow);
    });
  });
}

/* function toggleRead(button) {
    let targetButton = button;
    let targetTitle =
        targetButton.parentNode.previousElementSibling.previousElementSibling
          .innerHTML;
      if (targetButton.textContent === "Read") {
        targetButton.style.backgroundColor = "red";
        targetButton.textContent = "Not read";
      } else {
        targetButton.style.backgroundColor = "var(--button-color)";
        targetButton.textContent = "Read";
      }
      changeRead(findBook(myLibrary, targetTitle));
}

function readButtons() {
  let readButtons = document.querySelectorAll(".readButton");
  readButtons.forEach((readButton) => {
    readButton.addEventListener("click", () => {
      let targetTitle =
        readButton.parentNode.previousElementSibling.previousElementSibling
          .innerHTML;
      if (readButton.textContent === "Read") {
        readButton.style.backgroundColor = "red";
        readButton.textContent = "Not read";
      } else {
        readButton.style.backgroundColor = "var(--button-color)";
        readButton.textContent = "Read";
      }
      changeRead(findBook(myLibrary, targetTitle));
    });
  });
} */

function findBook(myLibrary, title) {
  for (book of myLibrary)
    if (book.title === title) {
      return myLibrary.indexOf(book);
    }
}

function removeBook(num) {
  myLibrary.splice(num, num + 1);
}

function changeRead(book) {
  if (myLibrary[book].read === "Read") {
    myLibrary[book].read = "Not read";
  } else {
    myLibrary[book].read = "Read";
  }
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", displayForm);

function displayForm() {
  document.getElementById("form-popup").style.display = "block";
}

const closeButton = document.getElementById("close");
closeButton.addEventListener("click", closeForm);

function closeForm() {
  document.getElementById("form-popup").style.display = "none";
  document.getElementById("form").reset();
}
