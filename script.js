const myLibrary = {};

function Book(name, author, number, read) {
  this.name = name;
  this.author = author;
  this.number = number;
  this.read = read === undefined ? 'NOT READ' : read;
  this.info = `${name} by ${author}, ${number} pages, ${this.read}`;
}

Book.prototype.updateInfo = function() {
  this.info = `${this.name} by ${this.author}, ${this.number} pages, ${this.read}`;
};

Book.prototype.toggleReadStatus = function() {
  this.read = this.read === 'READ' ? 'NOT READ' : 'READ';
  this.updateInfo();
  return this.read;
};

function addBookToLibrary(name, author, number, readStatus) {
  const newBook = new Book(name, author, number, readStatus);
  const key = `book_${Object.keys(myLibrary).length + 1}`;
  myLibrary[key] = newBook;
  return key;
}

const addBookButton = document.getElementById('add-book');
const popup = document.getElementById('popup');
const exitButton = document.getElementById('close-popup');
const form = document.getElementById('userInputForm');
const bookSection = document.getElementById('book-sect');

addBookButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

function closePopup() {
  popup.style.display = 'none';
}

exitButton.addEventListener('click', closePopup);

function addReadToggle(bookElement, bookInfo) {
  const readDiv = bookElement.querySelector('.read');
  readDiv.addEventListener('click', function () {
    readDiv.classList.toggle('alreadyRead');
    const bookKey = Object.keys(myLibrary).find(key => myLibrary[key].name === bookInfo.name);
    if (bookKey) {
      const newStatus = myLibrary[bookKey].toggleReadStatus();
      readDiv.textContent = newStatus; // Update the button's text content here.
      console.log('Updated Read status:', newStatus);
    }
  });
}

function addRemoveButton(bookElement) {
  const removeDiv = bookElement.querySelector('.remove');
  removeDiv.addEventListener('click', function() {
    const bookKey = bookElement.getAttribute('data-key');
    handleRemove(bookKey);
    bookElement.remove();
  });
}

function handleRemove(bookKey) {
  if (bookKey in myLibrary) {
    delete myLibrary[bookKey];
    console.log(`Book removed: ${bookKey}`);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputs = ['name', 'author', 'number'];
  closePopup();
  const newBook = document.createElement('div');
  newBook.id = 'book';
  const bookInfo = {};

  for (const input of inputs) {
    const value = form.querySelector(`#${input}`).value;
    bookInfo[input] = value;
    const popupItem = document.createElement('div');
    popupItem.textContent = value;
    newBook.appendChild(popupItem);
  }

  const popupRead = document.createElement('div');
  popupRead.textContent = 'NOT READ';
  popupRead.className = 'read';
  
  const bookKey = addBookToLibrary(bookInfo.name, bookInfo.author, bookInfo.number);
  newBook.setAttribute('data-key', bookKey);

  const popupRemove = document.createElement('div');
  popupRemove.textContent = 'REMOVE';
  popupRemove.className = 'remove';

  newBook.appendChild(popupRead);
  newBook.appendChild(popupRemove);
  
  addReadToggle(newBook, bookInfo);
  addRemoveButton(newBook);
  
  bookSection.appendChild(newBook);
}

form.addEventListener('submit', handleSubmit);

// Initialize first book (or it could be a loop for multiple initial books)
const firstBook = document.querySelector('#book');
const firstBookInfo = {
  name: 'Initial Book', // Replace with the actual initial book name
  author: 'Initial Author', // Replace with the actual initial book author
  number: '123', // Replace with the actual initial book number
  readStatus: 'NOT READ' // Replace with the actual initial book read status
};

firstBook.setAttribute('data-key', addBookToLibrary(firstBookInfo.name, firstBookInfo.author, firstBookInfo.number, firstBookInfo.readStatus));
addReadToggle(firstBook, firstBookInfo);
addRemoveButton(firstBook);
