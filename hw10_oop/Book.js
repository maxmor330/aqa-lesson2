export class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }
    set name(name) {
        if (typeof name !== 'string') {
            console.log('Name should be a string');
            return;
        }
        this._name = name;
    }
    set author(author) {
        if (typeof author !== 'string') {
            console.log('Author should be a string');
            return;
        }
        this._author = author;
    }
    set year(year) {
        if (!Number.isInteger(year) || year <= 0) {
            console.log('Year should be a positive integer');
            return;
        }
        this._year = year;
    }
    get name() {
        return this._name;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }
    printInfo() {console.log(`Book "${this.name}" by ${this.author} was published in ${this.year}`)}

    static oldestBook(bookList) {
        const oldBook = bookList.toSorted((a,b) => a.year - b.year)[0];
        console.log(`The oldest book is ${oldBook.name} by ${oldBook.author} was published in ${oldBook.year}`);
    }
}