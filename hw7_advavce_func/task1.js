/*
Створіть функцію handleNum яка буде приймати 3 параметри.
число
Колбек функцію яку треба викликати якщо передане число парне
Колбек функцію яку треба викликати якщо передане число непарне
Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. 
Кожна з них має виводити просте повідомлення в консоль. 
Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше
*/

// v1
function handleNum(num, callback1, callback2) {
    if (num%2 === 0) {
        callback1();
    } else {
        callback2()
    };
}

// v2
const handleNum2 = (num, cb1, cb2) => {
    if (num%2 === 0) cb1(); else cb2()
}

// callbacks
const handleEven = () => console.log('number is even');
const handleOdd = () => console.log('number is odd');

// check
handleNum(777, handleEven, handleOdd);
handleNum2(888, handleEven, handleOdd);