export const createElement = (element) => {
    return document.createElement(element);
}

export const createText = (text) => {
    return document.createTextNode(text);
}

export function createBookEntry() {
    const bookEntry = createElement('div');
    bookEntry.classList.add('book-entry');
    return bookEntry;
}

export function createPlaceholder() {
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

export const createAuthorElement = (author) => {
    const authorName = createText(author)
    const authorElement = createElement('p');
    authorElement.append(authorName);
    authorElement.classList.add('book', 'author');
    return authorElement;
}

export const createTitleElement = (title) => {
    const titleName = createText(title)
    const titleElement = createElement('h3');
    titleElement.append(titleName);
    titleElement.classList.add('book', 'title');
    return titleElement;
}

export const createGenreElement = (genre) => {
    const genreName = createText(genre);
    const genreElement = createElement('div');
    genreElement.append(genreName);
    genreElement.classList.add('book', 'genre');
    return genreElement;
}

export const createPagesElement = (pages) => {
    const numberOfPages = createText(`pages: ${pages}`);
    const pagesElement = createElement('div');
    pagesElement.append(numberOfPages);
    pagesElement.classList.add('book', 'pages');
    return pagesElement;
}

export const createBookUI = () => {
    const bookUI = createElement('div');
    bookUI.classList.add('book-ui');
    return bookUI;
}

export const createStatusUI = () => {
    const statusUI = createElement('div');
    statusUI.classList.add('status-ui');
    return statusUI;
}

export const createReadStatusElement = (readStatus) => {
    const readStatusText = createText(readStatus);
    const readStatusElement = createElement('div');
    readStatusElement.append(readStatusText);
    readStatusElement.classList.add('readStatus');
    return readStatusElement;
}

export const createStatusButton = () => {
    const statusButton = createElement('div');
    statusButton.classList.add('changeStatus');
    return statusButton;
}

export const createDeleteButton = () => {
    const deleteButton = createElement('div');
    deleteButton.classList.add('deleteBook')
    deleteButton.setAttribute('title', 'Delete Book');
    deleteButton.setAttribute('aria-label', 'Delete Book');
    return deleteButton;
}

export function generateRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return { r, g, b };
}

export function appendRandomColor(color, element) {
    element.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`
}

export function createFrame() {
    const frame = createElement('div');
    frame.classList.add('frame');
    return frame;
}

export function createPicture() {
    const picture = createElement('div');
    picture.classList.add('picture');
    const cover = generateRandomColor();
    appendRandomColor(cover, picture);
    return picture;
}

export function createBookInfo() {
    const bookInfo = createElement('div');
    bookInfo.classList.add('bookinfo');
    return bookInfo;
}

export function createPrimaryInfo() {
    const primaryInfo = createElement('div');
    primaryInfo.classList.add('primary-info');
    return primaryInfo;
}

export function createSecondaryInfo() {
    const secondaryInfo = createElement('div');
    secondaryInfo.classList.add('secondary-info');
    return secondaryInfo;
}

export const createSvgIcon = (design) => {
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