const myLibrary = [];

function Book(id, title, author, genre, pages, read) {
    if (!new.target) {
        throw Error("You must use the new operator to call the constructor");
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

let id = crypto.randomUUID();


function addBookToLibrary(id, title, author, genre, pages, read) {
    const book = new Book(id, title, author, genre, pages, read);
    myLibrary.push(book);
}

addBookToLibrary(crypto.randomUUID(), 'test', 'test', 'cookbook', 200, true);
addBookToLibrary(crypto.randomUUID(), 'test', 'test', 'cookbook', 200, false);
addBookToLibrary(crypto.randomUUID(), 'test', 'test', 'cookbook', 400, false);

console.log(myLibrary[0]);
console.log(myLibrary[1]);
console.log(myLibrary[2]);


