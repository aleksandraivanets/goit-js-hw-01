'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';
let password = prompt('Введіть пароль!');
let message;

console.log(password);

if (password) {
    if (password === ADMIN_PASSWORD) {
        message = 'Ласкаво просимо!';
        console.log(message);
    } else {
        message = 'Доступ заборонений, невірний пароль!';
        console.log(message);
    }
} else {
    console.log('Скасовано користувачем!');
}


// if (password === ADMIN_PASSWORD) {
//     message = 'Ласкаво просимо!';
//     console.log(message);
// } else if (password !== ADMIN_PASSWORD) {
//     message = 'Доступ заборонений, невірний пароль!';
//     console.log(message);
// } else {
//     message = 'Скасовано користувачем!';
//     console.log(message);
// }

console.log('-------------------');