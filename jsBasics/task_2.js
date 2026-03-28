/*
Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, 
створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. 
Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.
*/

const person1 = 'Romeo';
const person2 = 'Juliet';
const hiPoeple = 'Hello ' + person1 + ' and hello ' + person2;
console.log(hiPoeple)

const hiAgain = `Hello ${person1} and hello ${person2}`;
console.log(hiAgain);