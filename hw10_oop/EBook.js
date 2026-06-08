import { Book } from "./Book.js";

export class EBook extends Book{
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this.fileFormat = fileFormat;
    }
    set fileFormat(fileFormat) {
        if (typeof fileFormat !== 'string') {
            console.log('File Format should be a string');
            return;
        }
        this._fileFormat = fileFormat;
    }
    get fileFormat() {
        return this._fileFormat;
    }
    printInfo() {console.log(`Book "${this.name}" by ${this.author} was published in ${this.year}, file format - ${this.fileFormat}`)}

    static fromBookToEBook(book, fileFormat) {
        return new EBook (book.name, book.author, book.year, fileFormat);
    }
}