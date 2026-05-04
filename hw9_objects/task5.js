/*
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі
*/

const users = [
    {name: 'Tom', email: 'tommail@i.ua', age: 21},
    {name: 'Bob', email: 'bobmail@i.ua', age: 23}
];

for (const {name, email, age} of users) {
    console.log(`${name} is ${age} y.o., email: ${email}`)
};