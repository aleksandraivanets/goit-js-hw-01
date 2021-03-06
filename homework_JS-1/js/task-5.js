'use strict'

let usercountry = prompt('Введіть країну до якої буде спрямована доставка : ').toLowerCase();
let cost;

switch (usercountry) {
    case 'китай':
        cost = 100;
        alert(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
        break

    case 'чилі':
        cost = 250;
        alert(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
        break

    case 'австралія':
        cost = 170;
        alert(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
        break

    case 'індія':
        cost = 80;
        alert(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
        break

    case 'ямайка':
        cost = 120;
        alert(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
        break
}

if (usercountry != cost) {
    alert('У вашій країні доставка недоступна');
}