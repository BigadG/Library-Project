const myLibrary = [];

function bookLibrary(name, author, number, read) {
  this.name = name;
  this.author = author;
  this.number = number;
  this.read = read;
  return this.info = `${name} by ${author}, ${number} pages, ${read}`;
}

function addBookToLibrary(name, author, number, readStatus) {
  const newBook = new bookLibrary(name, author, number, readStatus);
  myLibrary.push(newBook.info);

  if (readStatus) {
    newBook.read = true;
  }
}


const addBook = document.getElementById('add-book');
const enterBttn = document.getElementById("enter"); //enter button displayed on popup
const popup = document.getElementById("popup");
const books = document.getElementById("book");
const booksect = document.getElementById("book-sect");
const form = document.getElementById("userInputForm");
const exit = document.getElementById("close-popup");
const remove = document.querySelector(".remove");



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

  let bookInfo = {}; // Object to store book information

  for (let i = 0; i < inputs.length; i++) {
    let value = form.querySelector(`#${inputs[i]}`).value;
    bookInfo[inputs[i]] = value; // Store book information in the object
  
    const popupItem = document.createElement("div");
    popupItem.textContent = `${value}`;
    newBook.appendChild(popupItem);
  
  }
  

  const popupRead = document.createElement("div");
  popupRead.textContent = "NOT READ"; // Default text content
  popupRead.className = "read"; // Apply the "read" class
  
  let readStatus = false;

  popupRead.addEventListener("click", function () {
    popupRead.classList.toggle("alreadyRead");
    popupRead.textContent = popupRead.classList.contains("alreadyRead") ? "READ" : "NOT READ";
    readStatus = popupRead.textContent === "READ";
    console.log("Read status:", readStatus);

    if (readStatus) {
      myLibrary.splice(-1)
      addBookToLibrary(bookInfo.name, bookInfo.author, bookInfo.number, true);
      console.log(myLibrary);
    }

  });
  
  addBookToLibrary(bookInfo.name, bookInfo.author, bookInfo.number, readStatus);
  console.log(myLibrary);

  const popupRemove = document.createElement("div");
  popupRemove.textContent = "REMOVE";
  popupRemove.className = "remove";
  popupRemove.addEventListener("click", function() {
    newBook.remove(); // Remove the parent div when "REMOVE" is clicked
});

  newBook.appendChild(popupRead);
  newBook.appendChild(popupRemove);
  booksect.appendChild(newBook);
  
}

addBook.addEventListener("click", addBook);
enterBttn.addEventListener("click", enterBttn);
form.addEventListener("submit", handleSubmit);
exit.addEventListener("click", closePopup);





const toggleButton = document.querySelector(".read");
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



const bookEntries = document.querySelectorAll("#book");

// Loop through each book entry and attach a "REMOVE" button event listener
bookEntries.forEach(bookEntry => {
    const removeButton = bookEntry.querySelector(".remove");
    
    removeButton.addEventListener("click", function() {
        bookEntry.remove(); // Remove the parent div (book entry) when "REMOVE" is clicked
    });
});


//As of right now. When changing the read status, the most recent myLibrary instance is deleted
//and a new one is created with the proper read status. This works perfectly if the intance being
//updated is the most recent once created, but if it isn't, then the most recent one is the one
//that ends up being deleted. Next: Figure out how to specifically delete the instance being updated.
//Maybe use 'splice' method again?


//Modify input boxes on popup so they're better displayed