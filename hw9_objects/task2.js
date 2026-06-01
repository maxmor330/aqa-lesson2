/*
Створіть об'єкт book з такими властивостями:
title: рядок, представляє назву книги.
author: рядок, представляє автора книги.
year: рядок, представляє ім'я власника автомобіля
Деструктуризуйте назву та автора книги з об'єкта book.
Виведіть деструктуризовані змінні в консоль
*/

const book = {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859
}

const {title, author} = book;

console.log(title + ' by ' + author);