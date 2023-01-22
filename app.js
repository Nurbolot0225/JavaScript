// Переменный

// let a = 1;
// console.log(a);
// a = 'test';
// console.log(a);

// Базовые арифметические операторы

// const width = 10;
// const height = 5;
// const space = width * height;
// const newWidth = width - 4;
// const newHeight = height + 4;
// const division = newWidth / newHeight;
// const volume = 2 ** 3; // 2 * 2 * 2
// console.log(volume);

// Строки
// const city = 'Москва';
// const street = 'Новослободская';
// console.log(city + ', ' + street);

// Операторы присваивания
// let age = 20 + 1;
// age += 2; // age = age + 2
// age -= 2; // age = age + 2
// age *= 2; // age = age + 2
// age /= 2; // age = age + 2
// console.log(age);

// Операторы сравнения
// const currentAge = 20;
// console.log(currentAge > age);
// console.log(currentAge >= age);
// console.log(currentAge < age);
// console.log(currentAge <= age);
// console.log(currentAge == age);

// Порядок операторов
// const isSuited = 100 - 10 > 90 - 5;
// console.log(isSuited);
//
// const a = (6 + 10) / 2;
// console.log(a);
//
// let b;
// let c;
// c = b = 100 + 50;
// console.log(c);
// console.log(b);

// Типы данных
// let a = 5;
// let b = 5.6;
// console.log(typeof a);
// console.log(typeof b);
// a = 'строка';
// console.log(typeof a);
//
// let isAdmin = a > 10;
// console.log(typeof isAdmin);
//
// let c = undefined;
// console.log(typeof c);
// c = 5;
// console.log(typeof c);
//
// let d = null;
// console.log(typeof (d == null));

// Шаблонные строки
// const projectName = 'Сайт магазина';
// const price = 2000;
// const author = 'Василий';
//
// const template = author + ' заказал ' + projectName + ' по цене ' + price + '$';
// console.log(template);
//
// const template2 = `${author} 'заказал' ${projectName} по цене ${price}$`;
// console.log(template2);
//
// const template3 = 'Проект \n' + 'Цена: ' + price + '$';
// console.log(template3);
//
// const template4 = `Проект
// Цена ${price}`;
// console.log(template4)

// Преобразование типов
// const age = '20';
// console.log(Number(age) + 1);
// console.log(age * 3);
// const userName = 'Вася';
// console.log(Number(userName) + 5);
// console.log(typeof NaN);
// console.log(String(4) + 7);
// console.log(Boolean('') + 10);
// console.log(true + 2);

// const a = 2 + '10';
// console.log(a - 10);

// if else
// const money = 100;
// if (money > 50) {
//     console.log('Может купить наш продукт');
// } else if (money > 55) {
//     console.log('Куплен мини продукт');
// }
// else {
//     console.log('Не хватает баланса');
// }

// const deposit = 12000;
// const rate = 0.07;
// const depositLength = 24;
// const houseCost = 13500;
//
// const res = deposit * (1 + rate / 12) ** 24;
// if (res > houseCost) {
//     console.log(`Мы накопили: ${res}. Может купить. Остаток ${res - houseCost}`);
// } else {
//     console.log(`Мы накопили: ${res}. Купит не сможем :(`);
// }

// switch
// const role = 'manager';
// switch (role) {
//     case 'manager': // role === manager
//         console.log('manager');
//         break;
//     case 'admin': // role === admin
//         console.log('admin');
//         break;
//     case 'ceo': // role === ceo
//         console.log('ceo');
//         break;
//     default:
//         console.log('Мы тебя не знаем');
// }

// const bmwX3Price = 100000;
// const fordFocusPrice = 100000;
// const budget = 20000;
// const res = budget > bmwX3Price ? 'bmw' : budget > fordFocusPrice ? 'ford' : 'Велосипед';
// console.log(`Я хочу купит ${res}`);

// Логическое операторы
// const isAdmin = true;
// const isWrite = true;
//
// console.log(`Системный файл ${isAdmin && isWrite}`);
// console.log(`Обычный файл ${isAdmin || isWrite}`);
// console.log(`Инвертируем права админа ${!isAdmin}`);
//
// const isEdited = true;
// const isSuperAdmin = true;
//
// console.log(`Системный файл с редактированием ${
//     isAdmin && isWrite && (!isEdited || isSuperAdmin)
// }`);

// const balance = 1000;
// const bonusBalance = 900;
// const isBaned = false;
// const isExist = false;
// const isSelling = true;
//
// const canBay = (balance > 1000 || bonusBalance > 100)
//     && !isBaned
//     && !isExist
//     && isSelling
// console.log(`Могу купить игру: ${canBay ? 'Да' : 'Нет'}`);

// Введение в функции
// function logName(name, surname) {
//     console.log(`Моё имя: ${name} ${surname}`);
// }
// logName('Нурболот', 'Берибеков');
//
// function countDepositSum(depositInUSD, month, rate) {
//     return depositInUSD * (1 + rate / 12) ** month;
// }
// const exemple1 = countDepositSum(1000, 24, 0.12);
// console.log(exemple1);
//
// console.log(countDepositSum(1000, 48, 0.10));

// // Анонимные функции
// function powerOfTwo(num) {
//     return num ** 2
// }
// console.log(powerOfTwo(5));
//
// const pofTo = function (num) {
//     return num ** 2
// }
// console.log(pofTo(6));

// Стрелочные функции
// function powerOfTwo(num) {
//     return num  ** 2
// }
// console.log(powerOfTwo(5));
//
// const pofTo = num => num ** 2;
// console.log(pofTo(6));

// const toRower = (num, power) => num ** power;
//
// console.log(toRower(2, 3));

// function toPower(num = 2, power = 2) {
//     return num ** power;
// }
// console.log(toPower(5));

// function canAccessWebsite(age) {
//    if (age < 18) {
//        return 'Нет'
//    }
//    return 'Да'
// }
// console.log(canAccessWebsite(18));
//
// const canAccessWebsite2 = age => age < 18 ? 'Нет' : 'Да';
// console.log(canAccessWebsite(15));

// const KG_IN_USD = 7;
// const KM_IN_USD = 5;
//
// function calculateW(present) {
//     return present * KG_IN_USD;
// }
//
// function calculateKm(distance) {
//     return distance * KM_IN_USD;
// }
//
// function getExchangePrice(present1, present2, distance) {
//     const price1 = calculateW(present1);
//     const price2 = calculateW(present2);
//     const distancePrice = calculateKm(distance);
//     return price1 + price2 + distancePrice;
// }
//
// console.log(getExchangePrice(1,2,10));

function computeCredit(age, hasJob = false) {
    switch (true) {
        case age > 24 && hasJob:
            return 500;
        case age > 24:
            return 1000;
        default:
            return 0;
    }
}
function canBuy(productPrice, age, money, hasJob = false) {
    const creditMoney = computeCredit(age, hasJob);
    return productPrice <= money + creditMoney;
}
console.log(canBuy(2000, 25, 1500, true));