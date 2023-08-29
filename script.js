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

exit.addEventListener("click", closePopup)

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target; // Assuming 'form' is defined somewhere
  const inputs = ["name", "author", "number"];

  closePopup();

  const newBook = document.createElement("div");
  newBook.id = "book";

  for (let i = 0; i < inputs.length; i++) {
      const value = form.querySelector(`#${inputs[i]}`).value;

      const popupItem = document.createElement("div");
      popupItem.textContent = `${value}`;
      newBook.appendChild(popupItem);
  }

  const popupRead = document.createElement("div");
  popupRead.textContent = "READ";
  popupRead.className = "read";

  const popupRemove = document.createElement("div");
  popupRemove.textContent = "REMOVE";
  popupRemove.className = "remove";

  newBook.appendChild(popupRead);
  newBook.appendChild(popupRemove);
  booksect.appendChild(newBook);
}


addBook.addEventListener("click", addBook);
enterBttn.addEventListener("click", enterBttn);
form.addEventListener("submit", handleSubmit);
exit.addEventListener("click", closePopup);



  const toggleButton = document.getElementById("read");
  let isToggled = toggleButton.classList.contains("alreadyRead");

  function updateButtonContent() {
      if (isToggled) {
          toggleButton.textContent = "READ";
      } else {
          toggleButton.textContent = "NOT READ";
      }
  }

  function handleClick() {
      toggleButton.classList.toggle("alreadyRead", !isToggled);
      isToggled = !isToggled;
      updateButtonContent();
  }

  toggleButton.addEventListener("click", handleClick);
  updateButtonContent(); // Set initial button text
