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


// Attach click event listeners to open and close popup
addBook.addEventListener('click', () => {
  popup.style.display = "block";
});
enterBttn.addEventListener('click', () => {
  popup.style.display = "none";
});
  