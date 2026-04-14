/*
Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)
*/

function area(width, height){
    return width * height;
}
console.log(area(5, 10));

const area1 = function(width, height){
    return width * height;
}
console.log(area1(6, 11));

const area2 = (width, height) => {
    return width * height;
}
console.log(area2(7, 12));

const area3 = (width, height) => width * height;
console.log(area3(8, 13));