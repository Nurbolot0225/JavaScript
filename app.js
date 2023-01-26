/////////////////////////// Переменный //////////////////////////////

// let a = 1;
// console.log(a);
// a = 'test';
// console.log(a);

///////////////////////// Базовые арифметические операторы ///////////////////////////////

// const width = 10;
// const height = 5;
// const space = width * height;
// const newWidth = width - 4;
// const newHeight = height + 4;
// const division = newWidth / newHeight;
// const volume = 2 ** 3; // 2 * 2 * 2
// console.log(volume);

////////////////////////////////// Строки ///////////////////////////////////////////////
// const city = 'Москва';
// const street = 'Новослободская';
// console.log(city + ', ' + street);

///////////////////////// Операторы присваивания //////////////////////////////
// let age = 20 + 1;
// age += 2; // age = age + 2
// age -= 2; // age = age + 2
// age *= 2; // age = age + 2
// age /= 2; // age = age + 2
// console.log(age);

///////////////////////// Операторы сравнения //////////////////////////////
// const currentAge = 20;
// console.log(currentAge > age);
// console.log(currentAge >= age);
// console.log(currentAge < age);
// console.log(currentAge <= age);
// console.log(currentAge == age);

///////////////////////// Порядок операторов //////////////////////////////
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

//////////// Типы данных ///////////////////////////
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

//////////// Шаблонные строки ///////////////////////////
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

/////////////////// Преобразование типов ///////////////////////////////
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

/////////////////////////// Логическое операторы ////////////////////////////
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

/////////////// Анонимные функции ////////////////////
// function powerOfTwo(num) {
//     return num ** 2
// }
// console.log(powerOfTwo(5));
//
// const pofTo = function (num) {
//     return num ** 2
// }
// console.log(pofTo(6));

//////////////////////// Стрелочные функции /////////////////////
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

// function computeCredit(age, hasJob = false) {
//     switch (true) {
//         case age > 24 && hasJob:
//             return 500;
//         case age > 24:
//             return 1000;
//         default:
//             return 0;
//     }
// }
// function canBuy(productPrice, age, money, hasJob = false) {
//     const creditMoney = computeCredit(age, hasJob);
//     return productPrice <= money + creditMoney;
// }
// console.log(canBuy(2000, 25, 1500, true));

/////////////////////////// Массив /////////////////////////
// const arr = ['Адилет', 'Нурсултан', 'Данияр'];
// arr.push('Нурболот'); // Добавление новый элемент конец массива
// console.log(arr);
// arr.unshift('Никита'); // Добавление новый элемент начало массива
// console.log(arr);
// arr.pop(); // Удаление последний элемент
// console.log(arr);
// arr.shift(); // Удаление первый элемент
// console.log(arr);

////////////////////////// Поиск элемента /////////////////////////
// const role = ['user', 'admin', 'manager'];
// const element = role.indexOf('admin');
// console.log(element);
// if (role.indexOf('admin')) {
//     console.log('Доступ есть');
// }
// const element2 = role.includes('admin');
// console.log(element2);
// if (role.includes('admin')) {
//     console.log('Доступ есть');
// }

// const roles = ['user', 'admin', 'superAdmin', 'manager'];
// const res = roles.slice(2);
// console.log(res);
// console.log(roles);
//
// const res2 = roles.slice(-1);
// console.log(res2);
//
// const res3 = roles.splice(2, 4);
// console.log(res 3);
//
// const res4 = roles.reverse();
// console.log(res4);
//
// const newRoles = ['sysadmin', 'developer'];
// const res5 = newRoles.concat(roles);
// console.log(res5);
// console.log(res5.length);

// const roles =  ['user', 'developer', 'sysadmin'];
// const url = 'auth/user/login';
// console.log(url.split('/'));
// console.log(roles.join('-'));

// const tasks = ['Задача 1'];
//
// function addTask(task) {
//     tasks.push(task);
// }
//
// function removeTask(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return
//     }
//     return tasks.splice(index, 1);
// }
//
// function prioritize(task) {
//     const result = removeTask(task);
//     if(!result) {
//         return
//     }
//     tasks.unshift(result[0]);
// }
//
// addTask('Задача 2');
// addTask('Задача 3');
// addTask('Задача 4');
// console.log(tasks);
// removeTask('Задача 3');
// console.log(tasks);
// prioritize('Задача 5');
// console.log(tasks);

///////////////////////// Деструктуризация массива ////////////////////////
// const [userData, userAge, userCity]  = ['Nurbolot', 20, 'Bishkek'];
// console.log(userData);
// console.log(userAge);
// console.log(userCity);
// const [hello, _, name] = ['Hello', 'World', 'Nurbolot'];
// console.log(hello, name);

////////////////////// Rest оператор ////////////////////////
// const data = [1, 2, 3, 4, 5, 6, 7, 8];
// const [one,two, ...el] = data;
// console.log(one, two, el);

// const url = 'https://purpleschool.ru/course/javascript';
// function getUrlParts(url) {
//     const [protocol, _, host, ...path] = url.split('/');
//     if (protocol === 'https:' || protocol === 'http:') {
//         console.log(protocol, _, host, path);
//         console.log(`Протокол: ${protocol.split(':')[0]}`);
//         console.log(`Доменная имя: ${host}`);
//         console.log(`Путь внутри сайта: /${path.join('/')}`);
//     }
// }
//
// getUrlParts(url);

///////////////////// Цикл for ///////////////////////////////////////
// for (let i = 1; i <= 10; i++) {
//     console.log(`Наш баланс ${i}$`);
// }

// const tasks = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4', 'Задача 5', 'Задача 6'];
//
// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 2') {
//         continue;
//     }
//     console.log(tasks[i]);
// }
// console.log('-----');
// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 4') {
//         break
//     }
//     console.log(tasks[i]);
// }

// const arr = ['!', 'JavaScript', 'люблю', 'Я'];
// const newArray = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
// }
// console.log(newArray.join(' '));
// console.log(arr.reverse().join(' '));

// for (let i = 1; i <= 5; i++) {
//     console.log(`Цикл 1 ${i}`);
//     for (let j = 1; j <= 3; j++) {
//         console.log(`Цикл 2 ${j}`);
//     }
// }

// const tasks = [[1, 'Задача 1'], [2, 'Задача 2']];
//
// for (let i = 0; i < tasks.length; i++) {
//     for (let j = 0; j < tasks[i].length; j++) {
//         console.log(tasks[i][j]);
//     }
// }
////////////////// Цикл while ////////////////////////
// const arr = [1, 4, 5, 6, 7, 8];
//
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         break;
//     }
//     console.log(`Вывод for - ${i}`)
// }
//
// let i = 1
// while (arr[i] <= 5 && i < arr.length) {
//     console.log(`Вывод while - ${i}`);
//     i++;
// }
//
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 3);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'string', true, {name: 'Name'}, undefined, null];
//
// //// итерация по значениям
// for (const number of arr) {
//     console.log(number);
// }
// //// итерация по индексам
// for (const number in arr) {
//     console.log(arr[number]);
// }

// const operations = [1000, -700, 300, -500, 10000];
// const startingBalance = 100;
//
// function getBalance(arrayOfOperations, initialBalance) {
//     let balance = initialBalance;
//     for (const element of arrayOfOperations) {
//         balance += element;
//     }
//     return balance;
// }
// console.log(getBalance(operations, startingBalance));
//
// function checkOperations(arrayOfOperations, initialBalance) {
//     let balance = initialBalance;
//     let isOk = true
//     for (const element of arrayOfOperations) {
//         balance += element;
//         if (balance < 0) {
//             isOk = false;
//             break;
//         }
//     }
//     return isOk;
// }
//
// console.log(checkOperations(operations, startingBalance));
//
// function averageOperations(arrayOfOperations) {
//     let positiveCount = 0;
//     let positiveSum = 0;
//     let negativeCount = 0;
//     let negativeSum = 0;
//     for (const element of arrayOfOperations) {
//         if (element > 0) {
//             positiveCount++;
//             positiveSum += element;
//         }
//         if (element < 0) {
//             negativeCount++;
//             negativeSum += element;
//         }
//     }
//     return [positiveSum / positiveCount, negativeSum / negativeCount];
// }
// console.log(averageOperations(operations));

////////////// Функции высшего порядка Callback ////////////////////////
// function add(a, b) {
//     return a + b;
// }
//
// function subtract(a, b) {
//     return a - b;
// }
//
// function power(a, b) {
//     return a**b;
// }
//
// function calculate(a, b, fn) {
//     console.log(fn.name);
//     const res = fn(a, b);
//     return res;
// }
//
// let res = calculate(3, 5, add);
// console.log(res);
// res = calculate(3, 5, subtract);
// console.log(res);
// res = calculate(3, 5, power);
// console.log(res);

////////////////// Возврат функции замыкания /////////////////////
// function power(pow) {
//     return function (num) {
//         return num**pow;
//     }
// }
//
// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));
//
// const powerOfThree = power(3);
// console.log(powerOfThree(5));
//
// console.log(power(5)(4));

// const power = pow => num => num**pow;
// console.log(power(2)(3));

//////////// forEach ///////////////
// const score = [5, 10, 0, 15];
// // for (const [i, el] of score.entries()) {
// //     console.log(`Раунд: ${i + 1}: ${el}`);
// // }
//
// score.forEach((el, i,) => {
//     console.log(`Раунд: ${i + 1}: ${el}`);
// });

///////////// map ///////////////////////
const transactionInUSD = [10, -7, 50, -10, 100];
const transactionInRUB = [];
for (const transactionInUSDElement of transactionInUSD) {
    transactionInRUB.push(transactionInUSDElement * 86);
}
console.log(transactionInUSD);
console.log(transactionInRUB);

const transactionInRUB2 = transactionInUSD
    .map((transaction, i) => {
        console.log(i);
        return transaction * 86;
    });
console.log(transactionInUSD);
console.log(transactionInRUB2);
