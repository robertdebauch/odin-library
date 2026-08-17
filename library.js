import { Book } from './book.js';

export class Library {
  #books;

  save() {
    localStorage.setItem('myLibrary', JSON.stringify(this.#books));
  }

  load() {
    const storedBooks = localStorage.getItem('myLibrary');
    if (!storedBooks) {
      return;
    }

    const parsedBooks = JSON.parse(storedBooks);

    this.#books = parsedBooks.map((bookData) => {
      return new Book(
        bookData.id,
        bookData.genre,
        bookData.title,
        bookData.author,
        bookData.pages,
        bookData.read,
      );
    });
  }

  constructor() {
    this.#books = [];
    this.load();
  }

  add(book) {
    this.#books.push(book);
    this.save();
  }

  remove(id) {
    const indexToRemove = this.#books.findIndex((book) => book.id === id);
    if (indexToRemove !== -1) {
      this.#books.splice(indexToRemove, 1);
      this.save();
    }
  }

  getAll() {
    return [...this.#books]; // copy my books to store them safely
  }

  get count() {
    return this.#books.length;
  }
}
