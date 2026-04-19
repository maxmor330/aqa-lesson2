/*
Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
У функції треба поділити numerator на denominator і повернути результат.
Додайте валідацію в функції. У разі,
якщо denominator дорівнює 0
або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 
або один з аргументів не є числом.
Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль,
навіть якщо помилка виникла або не виникла.
*/

function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Ділення на нуль недопустиме");
    }
    if (!Number.isFinite(numerator) || !Number.isFinite(denominator)){
        throw new Error("Значення мають бути числами");
    }
    return numerator/denominator;
}

try {
    let result = divide(81, 9);
    console.log(result);
} catch (error) {
    console.error("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    let result = divide(33, 0);
    console.log(result);
} catch (error) {
    console.error("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    let result = divide(100, '10');
    console.log(result);
} catch (error) {
    console.error("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}