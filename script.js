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
  const email = form.querySelector("#number").value;
  
  // Display form inputs on the page
  books.innerHTML = `Name: ${name}<br>Email: ${email}`;
  
  // Close the popup
  closePopup();
}

addBook.addEventListener("click", addBook);
enterBttn.addEventListener("click", enterBttn);
form.addEventListener("submit", handleSubmit);
submitButton.addEventListener("click", handleSubmit);
  