'use strict'

let credits = 23580;
const pricePerDroid = 3000;
let perDroid = prompt('Скільки дроїдів ви хочете придбати ?');

let totalPrice;
let remainder;

if (!perDroid) {
    console.log('Скасовано користувачем!');
} else {
    if (perDroid * 1) {
        totalPrice = perDroid * pricePerDroid;

        if (totalPrice > credits) {
            console.log('Недостатньо коштів на рахунку!');
        } else {
            remainder = credits - totalPrice;
            console.log(`Ви купили ${perDroid} дроїд(ів), на рахунку залишилося ${remainder} кредитів.`)
            alert(`Ви купили ${perDroid} дроїд(ів), на рахунку залишилося ${remainder} кредитів.`)
        };
    } else {
        alert('Не коректні дані, спробуйте ще раз)');
    }
}

