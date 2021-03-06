'use strict'

const total = 100;
const ordered = 50;
const num = prompt('Введіть кількість товарів в замовленні');

if (num > total) {
    alert('На складі недостатньо товарів!')
} else {
    alert('Замовлення оформлено, з вами зізвониться менеджер');
}

