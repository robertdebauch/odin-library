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
    this.info = function () {
        let readStatus;
        if (this.read === true) {
            readStatus = 'completed';
        } else {
            readStatus = 'not read yet';
        }
        return readStatus;
    }
}

let id = crypto.randomUUID();


function addBookToLibrary(id, genre, title, author, pages, read) {
    const book = new Book(id, genre, title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary(crypto.randomUUID(), 'media', 'The Eskimo and The Ice', 'Robert Debauch', 200, true);
addBookToLibrary(crypto.randomUUID(), 'cookbook', 'How to Cook In the Wild', 'Wildy Bill', 200, false);
addBookToLibrary(crypto.randomUUID(), 'guide', 'The Streets of Your Town', 'Single Viewer', 400, false);

/* elements in DOM */

const getAuthorName = function (author) {
    const author_name = document.createTextNode(author);
    return author_name;
}

const getTitleName = function (title) {
    const title_name = document.createTextNode(title);
    return title_name;
}

const getGenreText = function (genre) {
    const genre_text = document.createTextNode(genre);
    return genre_text;
}

const getNumberOfPages = function (pages) {
    const number_of_pages = document.createTextNode(pages);
    return number_of_pages;
}

const createAuthorInfo = (authorText) => {
    const author = document.createElement('p');
    author.append(getAuthorName(authorText));
    return author;
}

const createTitleInfo = (titleText) => {
    const title = document.createElement('h3');
    title.append(getTitleName(titleText));
    return title;
}

const createGenreInfo = (genreText) => {
    const genre = document.createElement('div');
    genre.append(getGenreText(genreText));
    return genre;
}

const createPagesInfo = (pagesText) => {
    const pages = document.createElement('div');
    pages.append(getNumberOfPages(pagesText));
    return pages;
}

const getAuthorElement = (element) => {
    const author = createAuthorInfo(element)
    author.classList.add('book', 'author')
    return author;
}

const getTitleElement = (element) => {
    const title = createTitleInfo(element);
    title.classList.add('book', 'title');
    return title;
}

const getGenreElement = (element) => {
    const genre = createGenreInfo(element)
    genre.classList.add('book', 'genre')
    return genre;
}

const getPagesElement = (element) => {
    const pages = createPagesInfo(element);
    pages.classList.add('book', 'pages');
    return pages;
}

const getReadStatus = function (status) {
    const readStatus = document.createTextNode(status);
    return readStatus;
}

const createReadStatus = (status_text) => {
    const readStatus = document.createElement('div');
    readStatus.append(getGenreText(status_text));
    return readStatus;
}

const getStatusElement = (element) => {
    const readStatus = createReadStatus(element);
    readStatus.classList.add('readStatus');
    return readStatus;
}

/* just for visual diffenence : random color */

function generateRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return { r, g, b };
}

function appendRandomColor(color, element) {
    element.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`
}

/* main function starting here : */

const bookShelf = document.querySelector(".bookshelf");
console.log(bookShelf);

function createBook(titleInfo, authorInfo, genreInfo, pagesInfo, statusInfo) {

    const bookEntry = document.createElement('div');
    bookEntry.classList.add('book-entry');

    bookShelf.append(bookEntry);

    const readStatus = getStatusElement(statusInfo);
    bookEntry.append(readStatus);

    const frame = document.createElement('div');
    frame.classList.add('frame');
    const picture = document.createElement('div');
    picture.classList.add('picture');
    const cover = generateRandomColor();
    appendRandomColor(cover, picture);

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

    const author = getAuthorElement(titleInfo);
    const title = getTitleElement(authorInfo);
    const genre = getGenreElement(genreInfo);
    const pages = getPagesElement(pagesInfo);

    primaryInfo.append(title);
    primaryInfo.append(author);
    secondaryInfo.append(genre);
    secondaryInfo.append(pages);
};


function showBooks(array) {
    array.forEach((book) => {
        createBook(book.author, book.title, book.genre, book.pages, book.info()); 
    });
}

showBooks(myLibrary);