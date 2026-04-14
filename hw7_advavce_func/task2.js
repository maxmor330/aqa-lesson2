/*
Створіть функцію яка приймає один параметр: num.
Усередині функції виведіть значення num в консоль.
Після цього, рекурсивно викличте функцію зі зменшеним значенням num (наприклад, num - 1).
Фунція повинна викликатися, доки num не стане менше або рівне 0.
Викличте вашу функцію з аргументом, наприклад, 5, щоб почати рекурсивний лічильник.
*/

console.log('recursion')
function counterDown(num) {
    if (num <= 0) {
        return;
    }
    console.log(num);
    counterDown(num - 1);
}
counterDown(5);

console.log('\npost-recursion')
function counterUp(num) {
    if (num <= 0) return
    counterUp(num - 1);
    console.log(num);
}
counterUp(5);