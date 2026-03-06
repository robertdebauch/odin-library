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

const createElement = (element) => {
    return document.createElement(element);
}

const createText = (text) => {
    return document.createTextNode(text);
}

function createBookEntry() {
    const bookEntry = createElement('div');
    bookEntry.classList.add('book-entry');
    return bookEntry;
}

const createAuthorElement = (author) => {
    const authorName = createText(author)
    const authorElement = createElement('p');
    authorElement.append(authorName);
    authorElement.classList.add('book', 'author');
    return authorElement;
}

const createTitleElement = (title) => {
    const titleName = createText(title)
    const titleElement = createElement('h3');
    titleElement.append(titleName);
    titleElement.classList.add('book', 'title');
    return titleElement;
}

const createGenreElement = (genre) => {
    const genreName = createText(genre);
    const genreElement = createElement('div');
    genreElement.append(genreName);
    genreElement.classList.add('book', 'genre');
    return genreElement;
}

const createPagesElement = (pages) => {
    const numberOfPages = createText(`pages: ${pages}`);
    const pagesElement = createElement('div');
    pagesElement.append(numberOfPages);
    pagesElement.classList.add('book', 'pages');
    return pagesElement;
}

const getReadStatus = function (status) {
    const readStatus = createText(status);
    return readStatus;
}

const createReadStatus = (status_text) => {
    const readStatus = createElement('div');
    readStatus.append(getReadStatus(status_text));
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

function createFrame() {
    const frame = createElement('div');
    frame.classList.add('frame');
    return frame;
}

function createPicture() {
    const picture = createElement('div');
    picture.classList.add('picture');
    const cover = generateRandomColor();
    appendRandomColor(cover, picture);
    return picture;
}

function createBookInfo() {
    const bookInfo = createElement('div');
    bookInfo.classList.add('bookinfo');
    return bookInfo;
}

function createPrimaryInfo() {
    const primaryInfo = createElement('div');
    primaryInfo.classList.add('primary-info');
    return primaryInfo;
}

function createSeecondaryInfo() {
    const secondaryInfo = createElement('div');
    secondaryInfo.classList.add('secondary-info');
    return secondaryInfo;
}

/* main function here : */

const bookShelf = document.querySelector(".bookshelf");

function createBook(book) {

    console.log(book);
    const bookEntry = createBookEntry();


    const frame = createFrame();
    const picture = createPicture();

    const bookInfo = createBookInfo();

    const secondaryInfo = createSeecondaryInfo();
    const primaryInfo = createPrimaryInfo();

    const author = createAuthorElement(book.author);
    const title = createTitleElement(book.title);
    const genre = createGenreElement(book.genre);
    const pages = createPagesElement(book.pages);
    
    const readStatus = getStatusElement(book.info());
    if (book.read) {
        readStatus.classList.add('completed')
    }

    bookShelf.append(bookEntry);
    bookEntry.append(readStatus);

    frame.append(picture);
    bookEntry.append(frame);

    bookEntry.append(bookInfo);

    bookInfo.append(primaryInfo);
    bookInfo.insertBefore(secondaryInfo, primaryInfo);

    primaryInfo.append(title);
    primaryInfo.append(author);
    secondaryInfo.append(genre);
    secondaryInfo.append(pages);
};


function showBooks(array) {
    array.forEach((book) => {
        createBook(book); 
        console.log(Object.getPrototypeOf(book));
    });
}

showBooks(myLibrary);