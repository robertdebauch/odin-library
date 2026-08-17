export class Book {

    #id;

    constructor(id, genre, title, author, pages, read) {
        this.#id = id;
        this.genre = genre;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get id() {
        return this.#id;
    }

    info() {
        let readStatus;
        if (this.read === true) {
            readStatus = 'completed';
        } else {
            readStatus = 'not read yet';
        }
        return readStatus;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }

    static createFromFormData(formData) {

        const id = crypto.randomUUID();
        const genre = formData.get('genre');
        const title = formData.get('title');
        const author = formData.get('author');
        const pages = parseInt(formData.get('pages'));
        const read = !!formData.get('read');

        return new Book(id, genre, title, author, pages, read);
    }
}