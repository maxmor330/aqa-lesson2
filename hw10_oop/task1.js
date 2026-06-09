import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book('The Hunger Games', 'Suzanne Collins', 2008);
book1.printInfo();

const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
book2.printInfo();

const ebook = new EBook('AI Engineering', 'Chip Huyen', 2024, 'PDF');
ebook.printInfo();

Book.oldestBook([book1, book2, ebook]);

const ebookFromBook = EBook.fromBookToEBook(book1, 'EPUB');
ebookFromBook.printInfo();