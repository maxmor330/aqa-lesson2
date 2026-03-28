/*
Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
Створіть змінну height і присвойте їй числове значення висоти циліндра.
Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
*/

let radius = 12;
let height = 55
let Vcylinder = Math.PI * radius ** 2 * height;
console.log(Vcylinder.toFixed(2));