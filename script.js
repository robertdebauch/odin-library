const myLibrary = [];

/* constructor */

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

/* method on prototype of Book */

Book.prototype.info = function () {
    let readStatus;
    if (this.read === true) {
        readStatus = 'completed';
    } else {
        readStatus = 'not read yet';
    }
    return readStatus;
}

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
}

/* get random id */

let id = crypto.randomUUID();


function addBookToLibrary(id, genre, title, author, pages, read) {
    const book = new Book(id, genre, title, author, pages, read);
    myLibrary.push(book);
}

/* build few starters books */

// addBookToLibrary(crypto.randomUUID(), 'media', 'The Eskimo and The Ice', 'Robert Debauch', 200, true);
// addBookToLibrary(crypto.randomUUID(), 'cookbook', 'How to Cook In the Wild', 'Wildy Bill', 200, false);
// addBookToLibrary(crypto.randomUUID(), 'guide', 'The Streets of Your Town', 'Single Viewer', 400, false);


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

function createPlaceholder() {
    const placeholder = createElement('div');
    const placeholderText = createElement('div');
    const placeholderHeading = createElement('h3');
    const placeholderPara = createElement('p');
    const placeholderImg = createElement('img');

    const placeholderHeadingText = createText('Your Library is Empty');
    const spanPlaceholder = createElement('span');
    const placeholderParaStart = createText('Press ');
    const spanPlaceholderText = 'New Book';
    const placeholderParaEnd = createText('to start building your own library');

    placeholder.classList.add('placeholder');
    placeholderText.classList.add('placeholder-text');

    placeholderHeading.append(placeholderHeadingText);
    placeholderPara.append(placeholderParaStart);

    spanPlaceholder.append(spanPlaceholderText);
    spanPlaceholder.classList.add('span-button');

    placeholderPara.append(spanPlaceholder);
    placeholderPara.append(placeholderParaEnd);

    placeholderImg.setAttribute('src', 'assets/sprite_fixed.png');
    placeholderImg.classList.add('booksprite');
    placeholderImg.setAttribute('alt', ' An image of the stack of books');

    placeholder.append(placeholderImg);
    placeholderText.append(placeholderHeading);
    placeholderText.append(placeholderPara);
    placeholder.append(placeholderText);

    return placeholder;
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

const createBookUI = () => {
    const bookUI = createElement('div');
    bookUI.classList.add('book-ui');
    return bookUI;
}

const createStatusUI = () => {
    const statusUI = createElement('div');
    statusUI.classList.add('status-ui');
    return statusUI;
}

const createReadStatusElement = (readStatus) => {
    const readStatusText = createText(readStatus);
    const readStatusElement = createElement('div');
    readStatusElement.append(readStatusText);
    readStatusElement.classList.add('readStatus');
    return readStatusElement;
}

const createStatusButton = () => {
    const statusButton = createElement('div');
    statusButton.classList.add('changeStatus');
    return statusButton;
}

const createDeleteButton = () => {
    const deleteButton = createElement('div');
    deleteButton.classList.add('deleteBook')
    deleteButton.setAttribute('title', 'Delete Book');
    deleteButton.setAttribute('aria-label', 'Delete Book');
    return deleteButton;
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

function createSecondaryInfo() {
    const secondaryInfo = createElement('div');
    secondaryInfo.classList.add('secondary-info');
    return secondaryInfo;
}

const createSvgIcon = (design) => {
    const svgNS = "http://www.w3.org/2000/svg";
    const boxWidth = 24;
    const boxHeight = 24;

    const coords = design;

    const svgIcon = document.createElementNS(svgNS, "svg");
    svgIcon.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
    svgIcon.setAttributeNS(null, "width", boxWidth);
    svgIcon.setAttributeNS(null, "height", boxHeight);
    svgIcon.style.display = "block";

    const path = document.createElementNS(svgNS, "path");
    path.setAttributeNS(null, 'd', coords);

    svgIcon.appendChild(path);
    return svgIcon;
}

function showMessage(data, type_of_message, start_text, end_text) {
    let success_message = 'success-message';
    let delete_message = 'delete-message';

    const message = createElement('div');
    const titleName = createText(`${data.title}`);
    const authorName = createText(`${data.author}`);
    const titleContainer = createElement('div');
    const authorContainer = createElement('div');

    titleContainer.classList.add('title-text');
    authorContainer.classList.add('author-text');

    const messageContainer = createElement('div');
    const messageTextStart = createText(start_text);
    const messageTextEnd = createText(end_text);

    titleContainer.append(titleName);
    authorContainer.append(authorName);

    messageContainer.append(titleContainer);
    messageContainer.append(messageTextStart);
    messageContainer.append(authorContainer);
    messageContainer.append(messageTextEnd);

    if (type_of_message === success_message) {
        message.classList.add('success-message');
        message.classList.remove('delete-message');
    } else if (type_of_message === delete_message) {
        message.classList.add('delete-message');
        message.classList.remove('success-message');
    }

    message.append(messageContainer);

    const bookIconContainer = createElement('div');
    bookIconContainer.classList.add('pseudo-icon');
    message.insertBefore(bookIconContainer, messageContainer);
    document.body.insertBefore(message, bookShelf);

    if (type_of_message === 'success-message') {
        addBookForm.reset();
    }

    setTimeout(() => {
        message.classList.add('fadeOut');

        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 300)
    }, 3000);
}

const bookShelf = document.querySelector(".bookshelf");

const placeholder = createPlaceholder();

function togglePlaceholder(array) {
    if (array.length === 0) {
        if (!placeholder.parentNode) {
            document.body.insertBefore(placeholder, bookShelf);
        }
    } else {
        if (placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }
    }
}


/* main function here : */

function createBook(book) {
    console.log(book);
    const bookEntry = createBookEntry();
    bookEntry.setAttribute('data-id', book.id);

    const bookUI = createBookUI();
    const statusUI = createStatusUI();

    const frame = createFrame();
    const picture = createPicture();

    const bookInfo = createBookInfo();

    const secondaryInfo = createSecondaryInfo();
    const primaryInfo = createPrimaryInfo();

    const author = createAuthorElement(book.author);
    const title = createTitleElement(book.title);
    const genre = createGenreElement(book.genre);
    const pages = createPagesElement(book.pages);

    const readStatus = createReadStatusElement(book.info());
    if (book.read) {
        readStatus.classList.add('completed')
    }

    const statusButton = createStatusButton();
    const deleteButton = createDeleteButton();

    const markUnreadIcon = createSvgIcon("M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M8.17,8.58L10.59,11L8.17,13.41L9.59,14.83L12,12.41L14.41,14.83L15.83,13.41L13.41,11L15.83,8.58L14.41,7.17L12,9.58L9.59,7.17L8.17,8.58Z");
    const markReadIcon = createSvgIcon("M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,14L17.25,7.76L15.84,6.34L11,11.18L8.41,8.59L7,10L11,14Z");

    if (book.read === true) {
        statusButton.append(markUnreadIcon);
        statusButton.setAttribute('title', 'Mark as Unread');
        statusButton.setAttribute('aria-label', 'Mark as Unread');
        statusButton.classList.remove('mark-read');
    } else {
        statusButton.append(markReadIcon);
        statusButton.setAttribute('title', 'Mark as Read');
        statusButton.setAttribute('aria-label', 'Mark as Read');
        statusButton.classList.add('mark-read');
    }

    const deleteIcon = createSvgIcon("M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
    deleteButton.append(deleteIcon);

    deleteButton.addEventListener('click', () => {

        if (window.confirm("Are you sure you want to delete this book?")) {
            const indexToRemove = myLibrary.findIndex((bookItem) => bookItem.id === book.id);
            if (indexToRemove !== -1) {
                myLibrary.splice(indexToRemove, 1);
            }

            showMessage(book, 'delete-message', 'by', 'was deleted');
            bookEntry.remove();
        } else {
            console.log('Something here, but what?')
        }

        togglePlaceholder(myLibrary);
    });

    // bookShelf.append(bookEntry);
    bookEntry.append(bookUI);
    bookUI.append(statusUI);
    statusUI.append(readStatus);
    statusUI.append(statusButton);
    bookUI.append(deleteButton);

    statusButton.addEventListener('click', () => {
        book.toggleReadStatus();

        if (book.read === true) {
            markReadIcon.remove();
            statusButton.append(markUnreadIcon);
            readStatus.textContent = book.info();
            readStatus.classList.add('completed');
            statusButton.setAttribute('title', '');
            statusButton.setAttribute('title', 'Mark as Unread');
            statusButton.classList.remove('mark-read');
            statusButton.classList.add('mark-unread');
        } else {
            markUnreadIcon.remove();
            statusButton.append(markReadIcon);
            readStatus.textContent = book.info();
            readStatus.classList.remove('completed')
            statusButton.setAttribute('title', '');
            statusButton.setAttribute('title', 'Mark as Read');
            statusButton.classList.remove('mark-unread');
            statusButton.classList.add('mark-read');
        }
    });

    frame.append(picture);
    bookEntry.append(frame);

    bookEntry.append(bookInfo);

    bookInfo.append(primaryInfo);
    bookInfo.insertBefore(secondaryInfo, primaryInfo);

    primaryInfo.append(title);
    primaryInfo.append(author);
    secondaryInfo.append(genre);
    secondaryInfo.append(pages);

    return bookEntry;
};


function showBooks(array) {
    const reversedList = array.toReversed();
    reversedList.forEach((book) => {
        const newBook = createBook(book);
        bookShelf.append(newBook);
    });
    togglePlaceholder(array);
}

/* adding some books at the start for visual clue */
showBooks(myLibrary);

/* */

const newBookButton = document.querySelector('.new-book');
const dialog = document.querySelector("#dialog");

const closeButton = document.querySelector('#close>svg');

newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
})

const addBookForm = document.querySelector('#add-book'); /* add book button inside form */
addBookForm.addEventListener('submit', handleFormSubmit); /* important for learning */


function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Adding book...');

    const formData = new FormData(event.target);

    const genre = formData.get('genre');
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = parseInt(formData.get('pages'));
    const read = !!formData.get('read');

    const newBookObject = Object.fromEntries(formData.entries());

    console.log(newBookObject);
    // console.log(title);
    // console.log(author);
    // console.log(genre);
    // console.log(pages);
    // console.log(read);

    addBookToLibrary(crypto.randomUUID(), genre, title, author, pages, read);
    bookShelf.innerHTML = ''; /* delete existing books to avoid duplicates */
    showBooks(myLibrary);

    dialog.close();
    showMessage({ title, author }, 'success-message', 'by', 'was added')
}

