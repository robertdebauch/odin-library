import './style.css';
import './reset.css';

import { Library } from './library.js';
import { Book } from './book.js';
import {
  createBookEntry,
  createPlaceholder,
  createAuthorElement,
  createTitleElement,
  createGenreElement,
  createPagesElement,
  createBookUI,
  createStatusUI,
  createReadStatusElement,
  createStatusButton,
  createDeleteButton,
  generateRandomColor,
  appendRandomColor,
  createFrame,
  createPicture,
  createBookInfo,
  createPrimaryInfo,
  createSecondaryInfo,
  createSvgIcon,
} from './ui-factory.js';
import { showMessage } from './notifications.js';
import {
  titleValidation,
  authorValidation,
  genreValidation,
  pagesValidation,
  renderGenres,
} from './validation.js';

const myLibrary = new Library();

const validators = {
  title: titleValidation,
  author: authorValidation,
  genre: genreValidation,
  pages: pagesValidation,
};

//   new Book(
//     crypto.randomUUID(),
//     'media',
//     'Geschwindigkeitsbegrenzung, Flughafensicherheitskontrolle',
//     'Theo van Doesburg',
//     200,
//     true,
//   ),
//   new Book(
//     crypto.randomUUID(),
//     'cookbook',
//     'So Long, and Thanks for All the Fish (The Hitchhikers Guide to the Galaxy, #4)',
//     'Wildy Bill',
//     200,
//     false,
//   ),
//   new Book(
//     crypto.randomUUID(),
//     'guide',
//     'Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch',
//     'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.',
//     400,
//     false,
//   ),
// ];

// const renderDefaults = () => {
//   defaultBooks.forEach((defaultBook) => {
//     myLibrary.add(defaultBook);
//   });
// };

// renderDefaults();

const bookShelf = document.querySelector('.bookshelf');

const placeholder = createPlaceholder();

function togglePlaceholder() {
  if (myLibrary.count === 0) {
    if (!placeholder.parentNode) {
      bookShelf.parentNode.insertBefore(placeholder, bookShelf);
    }
  } else {
    if (placeholder.parentNode) {
      placeholder.parentNode.removeChild(placeholder);
    }
  }
}

function createBook(book) {
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
    readStatus.classList.add('completed');
  }

  const statusButton = createStatusButton();
  const deleteButton = createDeleteButton();

  const markUnreadIcon = createSvgIcon(
    'M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M8.17,8.58L10.59,11L8.17,13.41L9.59,14.83L12,12.41L14.41,14.83L15.83,13.41L13.41,11L15.83,8.58L14.41,7.17L12,9.58L9.59,7.17L8.17,8.58Z',
  );
  const markReadIcon = createSvgIcon(
    'M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,14L17.25,7.76L15.84,6.34L11,11.18L8.41,8.59L7,10L11,14Z',
  );

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

  const deleteIcon = createSvgIcon(
    'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z',
  );
  deleteButton.append(deleteIcon);

  deleteButton.addEventListener('click', () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      myLibrary.remove(book.id);

      showMessage(book, 'delete-message', 'by', 'was deleted', bookShelf);
      bookEntry.remove();
    }

    togglePlaceholder();
  });

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
      readStatus.classList.remove('completed');
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
}

function showBooks() {
  const books = myLibrary.getAll();
  const reversedList = books.toReversed();
  reversedList.forEach((book) => {
    const newBook = createBook(book);
    bookShelf.append(newBook);
  });
  togglePlaceholder();
}

showBooks();

const newBookButton = document.querySelector('.new-book');
const dialog = document.querySelector('#dialog');

const closeButton = document.querySelector('#close>svg');

const placeholderButton = document.querySelector('.span-button');

if (placeholderButton) {
  placeholderButton.addEventListener('click', () => {
    dialog.showModal();
    document.body.setAttribute('style', 'overflow: hidden');
  });
}

function updateFormUI(inputId, result) {
  const input = document.getElementById(inputId);
  const errorSpan = input.closest('div').querySelector('.custom-error');

  errorSpan.textContent = result.message;

  if (result.isValid) {
    errorSpan.classList.add('success-text');
    errorSpan.classList.remove('error-text');
    input.classList.remove('input-error');
    input.classList.add('input-success');
  } else {
    errorSpan.classList.add('error-text');
    errorSpan.classList.remove('success-text');
    input.classList.remove('input-success');
    input.classList.add('input-error');
  }
}

function clearValidationUI() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    if (input.id) {
      const errorSpan = input.closest('div').querySelector('.custom-error');
      if (errorSpan) {
        errorSpan.textContent = '';
      }
      input.classList.remove('input-error', 'input-success');
    }
  });
}

const addBookForm = document.querySelector('#add-book');
addBookForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  let isFormValid = true;

  Object.keys(validators).forEach((id) => {
    const validator = validators[id];
    const result = validator(formData.get(id));

    updateFormUI(id, result);

    if (!result.isValid) {
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    return;
  }

  const newBook = Book.createFromFormData(formData);
  myLibrary.add(newBook);

  bookShelf.innerHTML = '';
  showBooks();

  dialog.close();
  showMessage(
    {
      title: newBook.title,
      author: newBook.author,
    },
    'success-message',
    'by',
    'was added',
    bookShelf,
    addBookForm,
  );
}

const reference = document.querySelector('#reference');

dialog.addEventListener('close', () => {
  addBookForm.reset();
  clearValidationUI();
  document.body.setAttribute('style', '');
});

newBookButton.addEventListener('click', () => {
  dialog.showModal();
  document.body.setAttribute('style', 'overflow: hidden');
});

closeButton.addEventListener('click', () => {
  dialog.close();
  addBookForm.reset();
  document.body.setAttribute('style', '');
});

reference.addEventListener('mouseenter', function () {
  const color = generateRandomColor();
  appendRandomColor(color, reference);
});

reference.addEventListener('mouseleave', function () {
  reference.style.backgroundColor = '';
});

addBookForm.addEventListener('input', (event) => {
  const { id, value } = event.target;
  const validator = validators[id];

  if (validator) {
    const result = validator(value);
    updateFormUI(id, result);
  }
});
