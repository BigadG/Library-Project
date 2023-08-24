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


  //next: link proj to github, add hover effect to buttons, finalize css