/*
Створіть програму, яка генерує таблицю множення для обраного числа 
за допомогою кожного з циклів for, while
*/

const num1 = 3;
console.log(`таблиця множення для ${num1}`)
for (let i = 1; i <= 10; i++) {
    let result = num1 * i;
    console.log(`${num1} x ${i} = ${result}`);
}

const num2 = 7;
console.log(`\nтаблиця множення для ${num2}`)
let i = 1;
while (i <= 10) {
    let result = num2 * i;
    console.log(num2 + ' x ' + i + ' = ' + result);
    i++
}