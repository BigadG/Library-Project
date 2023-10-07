class Book {
  constructor(name, author, number, read = 'NOT READ') {
    this.name = name;
    this.author = author;
    this.number = number;
    this.read = read;
    this.updateInfo();
  }

  updateInfo() {
    this.info = `${this.name} by ${this.author}, ${this.number} pages, ${this.read}`;
  }

  toggleReadStatus() {
    this.read = this.read === 'READ' ? 'NOT READ' : 'READ';
    this.updateInfo();
    return this.read;
  }
}

class Library {
  constructor() {
    this.books = {};
  }

  addBook(name, author, number, readStatus) {
    const newBook = new Book(name, author, number, readStatus);
    const key = `book_${Object.keys(this.books).length + 1}`;
    this.books[key] = newBook;
    return key;
  }

  findBookKeyByName(bookName) {
    return Object.keys(this.books).find(key => this.books[key].name === bookName);
  }

  removeBookByKey(bookKey) {
    if (bookKey in this.books) {
      delete this.books[bookKey];
      console.log(`Book removed: ${bookKey}`);
    }
  }
}

const myLibrary = new Library();

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
    const bookKey = myLibrary.findBookKeyByName(bookInfo.name);
    if (bookKey) {
      const newStatus = myLibrary.books[bookKey].toggleReadStatus();
      readDiv.textContent = newStatus; // This line updates the button's text content.
      console.log('Updated Read status:', newStatus);
    }
  });
}

function addRemoveButton(bookElement) {
  const removeDiv = bookElement.querySelector('.remove');
  removeDiv.addEventListener('click', function() {
    const bookKey = bookElement.getAttribute('data-key');
    myLibrary.removeBookByKey(bookKey);
    bookElement.remove();
  });
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
  
  const bookKey = myLibrary.addBook(bookInfo.name, bookInfo.author, bookInfo.number);
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

firstBook.setAttribute('data-key', myLibrary.addBook(firstBookInfo.name, firstBookInfo.author, firstBookInfo.number, firstBookInfo.readStatus));
addReadToggle(firstBook, firstBookInfo);
addRemoveButton(firstBook); 
