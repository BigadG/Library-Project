const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return this.info = `${title} by ${author}, ${pages} pages, ${read}`
}
console.log(this.info);

function addBookToLibrary() {
    const userInput = prompt("Enter something:");
    if (userInput !== null) {
      myLibrary.push(userInput);
      console.log(`Added "${userInput}" to the array.`);
      addBookToLibrary(); // Recursively call the function for more inputs
    } else {
      console.log("User input collection finished.");
      console.log("User inputs:", myLibrary);
    }
  }
addBookToLibrary(); // Start collecting user inputs



const addBook = document.getElementById('add-book');
const enterBttn = document.getElementById("enter"); //enter button displayed on popup
const popup = document.getElementById("popup");
const books = document.getElementById("book");
const booksect = document.getElementById("book-sect");
const form = document.getElementById("userInputForm");
const exit = document.getElementById("close-popup");


// Attach click event listeners to open and close popup
addBook.addEventListener('click', () => {
  popup.style.display = "block";
});

// Function to close the popup
function closePopup() {
  popup.style.display = "none";
}

function handleSubmit(event) {
  event.preventDefault();
  
  const name = form.querySelector("#name").value;
  const number = form.querySelector("#number").value;
  const authors = form.querySelector("#author").value;

  closePopup();


  // Display form inputs on the page
  const popupTitle = document.createElement("div")
  popupTitle.textContent = `TITLE: ${name}`
  const popupAuthor = document.createElement("div")
  popupAuthor.textContent = `AUTHOR: ${authors}`
  const popupPages = document.createElement("div")
  popupPages.textContent = `PAGES: ${number}`
  const newBook = document.createElement("div");
  newBook.id = "book";   // Assign an id to the new div
  newBook.appendChild(popupTitle);   // Add content to the new div
  newBook.appendChild(popupAuthor);
  newBook.appendChild(popupPages);
  booksect.appendChild(newBook);   // Append the new div to the parent div
  

}

addBook.addEventListener("click", addBook);
enterBttn.addEventListener("click", enterBttn);
form.addEventListener("submit", handleSubmit);
submitButton.addEventListener("click", handleSubmit);
exit.addEventListener("click", closePopup);
