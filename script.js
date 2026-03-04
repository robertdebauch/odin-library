const myLibrary = [];

function Book(id, genre, title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the new operator to call the constructor");
    }

    this.id = id;
    this.genre = genre;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let id = crypto.randomUUID();


function addBookToLibrary(id, genre, title, author, pages, read) {
    const book = new Book(id, genre, title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary(crypto.randomUUID(), 'cookbook', 'test', 'test', 200, true);
addBookToLibrary(crypto.randomUUID(), 'cookbook', 'test', 'test', 200, false);
addBookToLibrary(crypto.randomUUID(), 'cookbook', 'test', 'test', 400, false);

/* elements in DOM */

function createBook() {
const bookShelf = document.querySelector(".bookshelf");
console.log(bookShelf);

const bookEntry = document.createElement('div');
bookEntry.classList.add('book-entry');
console.log(bookEntry);

bookShelf.append(bookEntry);

const readStatus = document.createElement('div');
readStatus.classList.add('readStatus');
readStatus.textContent = 'not read yet'; /*temp*/
bookEntry.append(readStatus);

const frame = document.createElement('div');
frame.classList.add('frame');
const picture = document.createElement('div');
picture.classList.add('picture');

frame.append(picture);
bookEntry.append(frame);

const bookInfo = document.createElement('div');
bookInfo.classList.add('bookinfo');
bookEntry.append(bookInfo);

const primaryInfo = document.createElement('div');
primaryInfo.classList.add('primary-info');

const secondaryInfo = document.createElement('div');
secondaryInfo.classList.add('secondary-info');

bookInfo.append(primaryInfo);
bookInfo.insertBefore(secondaryInfo, primaryInfo);


const genre = document.createElement('div');
const genreText = document.createTextNode('genre info'); /*temp*/
genre.append(genreText);

const pages = document.createElement('div');
const numberOfPages = document.createTextNode('pages: 50'); /*temp. num? */
pages.append(numberOfPages);

const title = document.createElement('h3');
const titleText = document.createTextNode('Poetry Seeing #2');
title.append(titleText);

const author = document.createElement('p');
const authorText = document.createTextNode('Takahiro Kurashima');
author.append(authorText);

genre.classList.add('book', 'genre');
pages.classList.add('book', 'pages');
title.classList.add('book', 'title');
author.classList.add('book', 'author');

primaryInfo.append(title);
primaryInfo.append(author);
secondaryInfo.append(genre);
secondaryInfo.append(pages);
};




function showBooks(array) {
    array.forEach((book) => {
        

        createBook(); /* Only for test: i can see that the number of objects in array have a relationship with number of books that was created by temprorary function */
        const info = function () {
            let readStatus;

            if (book.read === true) {
                readStatus = 'completed';
            } else {
                readStatus = 'not read yet';
            }

            console.log(` genre: ${book.genre}, title: ${book.title}, author: ${book.author}, pages: ${book.pages}, read: ${readStatus}`)
        }
        /*id: ${book.id} - i don't think it's good to display the id*/
        info(book);
    });
}

showBooks(myLibrary);