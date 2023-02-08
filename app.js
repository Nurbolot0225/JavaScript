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
// const transactionInUSD = [10, -7, 50, -10, 100];
// const transactionInRUB = [];
// for (const transactionInUSDElement of transactionInUSD) {
//     transactionInRUB.push(transactionInUSDElement * 86);
// }
// console.log(transactionInUSD);
// console.log(transactionInRUB);
//
// const transactionInRUB2 = transactionInUSD
//     .map((transaction, i) => {
//         console.log(i);
//         return transaction * 86;
//     });
// console.log(transactionInUSD);
// console.log(transactionInRUB2);

/////////////////// filter //////////////////////

// const operations = [100, -20, 7, -20, 50];
// const positiveOperations = [];
// for (const operation of operations) {
//     if (operation > 0) {
//         positiveOperations.push(operation);
//     }
// }
// console.log(positiveOperations);
// const positiveOperations = operations
//     .filter(operation => {
//         return operation > 0
//     });
// console.log(positiveOperations);
// const positiveRUBOperations = operations
//     .filter(operation => {
//         return operation > 0
//     })
//     .map(operation => operation * 86);
// console.log(positiveRUBOperations);

// const prices = [[100, 200], [120, 100], [200, 350]];
//
// const result = prices
//     .map(product => product[1] - product[0])
//     .filter(price => price > 0);
// console.log(result)

//////////////////// reducer //////////////////////////
// const operations = [100, -20, 7, -30, 50];
//
// let balance = 0
// for (const operation of operations) {
//     balance += operation
// }
//
// const finalBalance = operations.reduce((acc, operation, i) => {
//    console.log(`Итерация ${i}, acc: ${acc}, operation ${operation}`);
//     return acc += operation;
// }, 0);
// console.log(finalBalance);
//
// const minElement = operations.reduce((acc, operation) => {
//     if (operation > acc) {
//         return acc;
//     } else {
//         return operation
//     }
// }, 0);
// console.log(minElement);

// const arr = [2, 4, 4, 10];
// const average = arr.reduce((acc, element, index) => {
//     if (index != arr.length - 1) {
//         return acc + element;
//     } else {
//         return (acc + element) / arr.length;
//     }
// }, 0);
// console.log(average);

// const arr = [1, 4, 4, 10, 20];
//
// let elGT5;
// for (const number of arr) {
//     if (number > 5) {
//         elGT5 = number;
//         break;
//     }
// }
//
// elGT5 = arr.find(el => el > 5);
// console.log(elGT5);
// elGT5Index = arr.findIndex(el => el > 5);
// console.log(elGT5Index);

// const arr = [2, 4, 4, 10, 20];
// function some(arr, element) {
//     const res = arr.find(el => el === element);
//     return res == undefined ? false : true;
// }
// console.log(some(arr, 2));
//
// console.log(arr.some(arr => arr === 3));

/////////////////// flat flatIndex ///////////////////
// const prices = [[2, 4], [3, 4], [10, [20, 50]]];
// const res = prices
// console.log(res.flat(2));
// console.log(res.flatMap(el => el.concat(1)));


///////////////// sort /////////////////////////
// const users = ['Маша', 'Вася', 'Катя', 'Аня'];
// console.log(users);
// users.sort()
// console.log(users);
//
// const operations = [100, -300, -100, 50, 480];
// console.log(operations);
// // < 0 - a, b - сохраняем порядок
// // > 0 - b, a - меняем порядок
// operations.sort((a,b) => a - b);
// console.log(operations);
//
// operations.sort((a,b) => {
//     if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1
//     }
// })
// console.log(operations);

//////////////// Быстрое создание массивов ////////////////
// const arr = [1, 2, 3, 4, 5];
// console.log(new Array(1, 2, 3, 4, 5));
// const arr2 = new Array(5);
// console.log(arr2.fill(1, 0, 3));
// console.log(arr2.fill(2, 3, 5));
//
// const arr3 = Array.from({ length: 5}, (cur, i) => i + 1);
// console.log(arr3);

//////////////// Основные строковые методы ////////////////
// const userName = 'Вася Пупкина';
// console.log(userName);
// console.log(userName[0] + userName[1]);
// console.log(userName[1]);
// console.log(userName[3]);
// console.log(userName.charAt(3));
//
// console.log(userName.length);
// console.log(userName.indexOf('уп'));
// console.log(userName.lastIndexOf('а'));
// console.log(userName.includes('а'));
// console.log(userName.includes('Васи'));
//
// console.log(userName.slice(5));
// console.log(userName.slice(5, 8));

// const fullUserName = 'Вася aka Terminator Marvel Пупкин';
//
// const userName = fullUserName.slice(0, fullUserName.indexOf(' '));
// console.log(userName);
// const userSurname = fullUserName.slice(fullUserName.lastIndexOf(' '), fullUserName.length + 1)
// console.log(userSurname);
// console.log(userName + userSurname);

/////////////////// Преобразование строки ////////////////////////
// const str = 'Nurbolot';
// console.log(str.includes('t'));
// console.log(str.startsWith('N'));
// console.log(str.endsWith('t'));
//
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.replace('bolot', 'sultan'));
// console.log(str.replaceAll('o', 'u'));
//
// const str2 = ' Нурболот Бердибеков  \nФамилия';
// console.log(str2.trimStart())
// console.log(str2.trim());
// console.log(str2.trimEnd());

/* Проверить является ли это номером телефона России */
/* верные */
// const num1 = '89103225356';
// const num2 = '+79103225356';
// const num3 = '+7(910)3235356';
// const num4 = '+7(910) 323-53-56';
// const num5 = ' +7(910) 323-53-56';
//
// /* не верные */
// const num1Error = '89103235';
// const num2Error = '+7d910323-53-56';
// const num3Error = '9+7102235356';
// const num4Error = '89103g35356';
//
// function isPhoneNumber(num) {
//     num = num.trim();
//     num = num.replace('+7', '8');
//     if (!num.startsWith('8')) {
//         return false;
//     }
//     num = num.replaceAll('(', '');
//     num = num.replaceAll(')', '');
//     num = num.replaceAll(' ', '');
//     num = num.replaceAll('-', '');
//     if (num.length !== 11) {
//         return false;
//     }
//     let onlyNumber = true;
//     for (const char of num) {
//         if (isNaN(Number(char))) {
//             onlyNumber = false;
//             break;
//         }
//     }
//     return onlyNumber;
// }
//
// console.log(isPhoneNumber(num1));
// console.log(isPhoneNumber(num2));
// console.log(isPhoneNumber(num3));
// console.log(isPhoneNumber(num4));
// console.log(isPhoneNumber(num5));
//
// console.log(isPhoneNumber(num1Error));
// console.log(isPhoneNumber(num2Error));
// console.log(isPhoneNumber(num3Error));
// console.log(isPhoneNumber(num4Error));

// const userFullName = 'Нурболот Бердибеков Бердибекович';
// console.log(userFullName.split(' '));
//
// const [firstName, familyName, lastName] = userFullName.split(' ')
// console.log(firstName);
// console.log(familyName);
// console.log(lastName);
// const arr = ['Ты', 'знаешь', 'JS'];
// console.log(arr.join(' '));

// const film = 'Звёздные Воины';
// console.log(film.padStart(50, ' *'));
// console.log(film.padEnd(50, ' +'));
// console.log(film.repeat(10));

/* Замаскировать всё, кроме последних 4x символов */
// const card = '2424515162627272';
/*  ************7272 */
// console.log(card.slice(-4).padStart(16, '*'));

///////////////////// Знакомство с объектами /////////////////////
// const userArray = ['Нурболот', ',Бердибеков', 20];
// const user = {
//     name: 'Нурболот',
//     surname: 'Бердибеков',
//     age: 20,
//     skills: [
//         'Программирование',
//         'Готовка'
//     ],
//     1: 1
// };

// const user = {
//     name: 'Нурболот',
//     surname: 'Бердибеков',
//     age: 20,
//     skills: [
//         'Программирование',
//         'Готовка'
//     ],
//     eduBase: 'Школа 10',
//     // eduPro: 'МФТИ'
// };
// console.log(user);
// console.log(user.skills[0]);
// const level = 'Pro';
// console.log(user['edu' + level]);
//
// // const res = prompt('Введите свойство');
// // console.log(user[res]);
// console.log(user.city)
// user['city'] = 'Москва';
// console.log(user.city);
//
// user.age = 30;
// user['age'] = 30;
// console.log(user);

// const users = [
//     { name: 'Вася', age: 30 },
//     { name: 'Катя', age: 18 },
//     { name: 'Аня', age: 40 },
//     { name: 'Петя', age: 25 }
// ];
//
// console.log(users.sort((oneAge, twoAge) => oneAge.age - twoAge.age));

// const users = [
//     {
//       name: 'Вася',
//       surname: 'Пупкин',
//       age: 30,
//       skills: ['Разработка DevOps']
//     },
//     {
//         name: 'Катя',
//         surname: 'Белова',
//         age: 18,
//         skills: ['Дизайн']
//     }
// ];
//
// const userData = users.map(user => {
//     return {
//         fullName: `${user.name} ${user.surname}`,
//         skills: user.skills.length,
//         age: user.age
//     }
// })
// console.log(userData);

//////////////  Методы объектов //////////////////
// const user = {
//     name: 'Нурболот',
//     surname: 'Бердибеков',
//     age: 20,
//     getFullName: function() {
//         return this.name + ' ' + this.surname;
//     }
// }
// console.log(user.getFullName());

// const wallet = {
//     balance: 0,
//     operations: [],
//     increase: function (sum, reason) {
//         this.balance += sum;
//         this.operations.push({
//             reason,
//             sum
//         })
//         return true;
//     },
//     decrease: function (sum, reason) {
//         if (this.balance < sum) {
//             console.log('Недостаточно баланса');
//             return false;
//         }
//         this.balance -= sum;
//         this.operations.push({
//             reason: reason,
//             sum: -sum
//         })
//         return true;
//     },
//     getOperationLength: function () {
//         return this.operations.length;
//     }
// }
//
// console. log(wallet.increase(1000, 'Зарплата'));
// console.log(wallet.getOperationLength());
// console.log(wallet.decrease(2000, 'Покупка ноутбука'));
// console.log(wallet.getOperationLength());
// console.log(wallet.decrease(500, 'Покупка телефон'));
// console.log(wallet.balance);
// console.log(wallet.operations);

////////////////// Повторение по объекту ///////////////////////
// const cities = {
//     msk: {
//         let: 200,
//         temp: 25
//     },
//     spb: {
//         let: 100,
//         temp: 20
//     }
// }

// let sumTemp = 0;
// let citiesCount = Object.keys(cities).length;
// for (const key in cities) {
//     sumTemp += cities[key].temp;
// }
// console.log(sumTemp / citiesCount);

// for (const key of Object.keys(cities)) {
//     sumTemp += cities[key].temp;
// }
// console.log(sumTemp / citiesCount);

// let user =  {
//     name: 'Вася',
//     age: 40,
//     city: 'Moscow'
// };
// const { age, ...usersWithAge } = user;
// console.log(age);
// console.log(usersWithAge);
//
// const additionalData = {
//     skills: ['Разработка', 'Дизайн'],
//     creditCard: '2342-2345-2734-5422'
// };
//
// user = {
//     ...user,
//     ...additionalData
// }
// console.log(user);

////////////// Optional chaining ////////////////
// const cities = {
//     msk: {
//         temp: {
//             celsius: 25
//         }
//     },
//     spb: {
//
//     }
// }
// const city = 'msk'
// if (cities[city] !== undefined && cities[city].temp !== undefined) {
//     console.log(cities[city].temp.celsius);
// }
// console.log(cities[city]?.temp?.celsius);

/*
    Сделать объект склад с методами добавления на склад,
    поиска по складу товара и расчёт веса
*/
// const warehouse = {
//     goods: [],
//     findGoodById: function (id) {
//         return this.goods.find(g => g.id === id);
//     },
//     addGood: function (good) {
//         const existedGood = this.findGoodById(good.id);
//         if (existedGood) {
//             console.log('Этот товар уже есть на складе');
//             return;
//         }
//         this.goods.push(good);
//     },
//     getWeightKg: function () {
//         return this.goods.reduce((acc, el) =>
//             acc += el.weight?.kg ? el.weight.kg : 0,
//             0
//         )
//     }
// };

/* товары */
// const car = {
//     id: 1,
//     weight: {
//         kg: 1000
//     },
//     brand: 'Ford'
// };
// const chair = {
//     id: 1,
//     weight: {
//         kg: 2
//     },
// };
// const paper = {
//     id: 3,
//     color: 'red'
// };
//
// warehouse.addGood(car);
// warehouse.addGood(car);
// warehouse.addGood(chair);
// warehouse.addGood(paper);
// console.log(warehouse.goods);
// let findedItem = warehouse.findGoodById(6);
// console.log(findedItem);
// findedItem = warehouse.findGoodById(1);
// console.log(findedItem);
// const w = warehouse.getWeightKg();
// console.log(w);

////////////// Пример scope chain //////////////////
// const successMessage = 'Успех'
// const user = {
//     name: 'Nur',
//     roles: []
// }
//
// function addRole(user, role) {
//     if (role === 'admin') {
//         const message = 'Ошибка';
//         console.log(message);
//         return user;
//     }
//     user.roles.push(role);
//     let successMessage = 'Ура!!!'
//     console.log(successMessage);
//
//     function logRoles() {
//         console.log(user.roles);
//     }
//     logRoles();
//     return user;
// }
// console.log(addRole(user, 'dev'));
// console.log(successMessage);

///////////////////// Пример использования this  ////////////////////////
'use strict';

// console.log(this);
//
// function addNum(num1, num2) {
//     console.log(this);
//     return num1 + num2;
// }
// addNum();
// const addNum2 = (num1, num2) => {
//     console.log(this);
//     return num1 + num2;
// }
// addNum2();

// const user = {
//     name: 'Nurbolot',
//     surname: 'Berdibekov',
//     getFullName: function () {
//         console.log(this);
//         return this.name + ' ' + this.surname;
//     }
// };
// user.getFullName();
//
// const user2 = {
//     name: 'Nursultan',
//     surname: 'Abykeev'
// };
//
// user2.getFullName = user.getFullName;
// user.getFullName();
//
// const getFullName = user2.getFullName();
// getFullName();

/////////////// Контекст в методах ////////////////////////

// const user = {
//     firstName: 'Nurbolot',
//     LastName: 'Berdibekov',
//     age: 20,
//     getUserInfo: function() {
//         console.log(`${this.firstName} ${this.LastName}`);
//
//         const canDrink = () => {
//             if (this.age >= 18) {
//                 console.log('Может уже пить!');
//             } else {
//                 console.log('Не может пить!')
//             }
//         }
//         canDrink();
//     },
//     getUserArrow: () => {
//         console.log(`${this.firstName} ${this.LastName}`);
//     }
// }
//
// user.getUserInfo();

///////////////// Arguments ////////////////////////
// function sumNum(num1, num2) {
//     console.log(this);
//     console.log(arguments);
//     return num1 + num2;
// }
//
// const sumNumArr = (num1, num2) => {
//     console.log(this);
//     console.log(arguments);
//     return num1 + num2;
// }
// console.log(sumNum(41, 1));
// console.log(sumNumArr(41, 1));

///////////// Упражнение - объект в объекте ////////////////////
// const company = {
//     name: 'STORES',
//     employees: [
//         {
//             name: 'Nurbolat',
//             getName: function() {
//                 return this.name;
//             },
//         }
//     ],
//     ceo: {
//         name: 'Nursultan',
//         getName: function() {
//             return this.name;
//         },
//     },
//     getName: function() {
//         return this.name;
//     },
// }
//
// console.log(company.getName());
// console.log(company.ceo.getName());
// console.log(company.employees.map(employee => employee.getName()));

///////////////// EOL для методов ////////////////////////
// const b = 1;
// const a = {
//     b,
//     getB: function() {
//         return this.b
//     },
//     getBAlt() {
//         return this.b
//     }
// }
// console.log(a);

//////////////// call apply ///////////////////////
// const audi = {
//     make: 'Audi',
//     model: 'A3',
//     year: 2021,
//     damages: [],
//     addDamage(part, rate) {
//         console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено: повреждение ${part} со степенью ${rate}`)
//         this.damages.push({
//             part,
//             rate
//         });
//     }
// }
// audi.addDamage('Капот', 1);
//
// const bmw = {
//     name: 'BMW',
//     model: 'X5',
//     year: 2022,
//     damages: [],
// }
//
// bmw.addDamage = audi.addDamage;
// // bmw.addDamage('Бампер', 2);

// const addDamageFunc = audi.addDamage;
// // addDamageFunc('Бампер', 2);
// addDamageFunc.call(bmw, 'Бампер', 2);
// addDamageFunc.call(audi, 'Бампер', 2);

// addDamageFunc.apply(bmw, ['Юбка', 2]);
// addDamageFunc.apply(audi, ['Юбка', 2]);

////////////////////  bind  //////////////////////
// const audi = {
//     make: 'Audi',
//     model: 'A3',
//     damages: []
// };
//
// const carManipulation = {
//     addDamage(part, rate) {
//         this.damages.push({ part, rate });
//         console.log(`Добавить повреждение на ${this.make} ${this.model}`);
//     }
// }
//
// const addDamageAudi = carManipulation.addDamage.bind(audi);
// addDamageAudi('Крыло', 3);
//
// const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');
// addDamageAudiRoof(5);
// addDamageAudiRoof(4);
// console.log(audi);

////////////////////// Упражнение - управление this ///////////////////////
// function removePassword(reset) {
//     if (reset) {
//         this.password = undefined;
//     } else {
//         this.password = '1';
//     }
// }
//
// const user = {
//     login: 'nur@a.ru',
//     password: '12345'
// };
//
// const resetUserPassword = removePassword.bind(user, true);
// resetUserPassword();
// console.log(user);

//////////////// IIFO ///////////////////////
// function init() {
//     console.log('Start');
// }
// init();
//
// (function() {
//     console.log('Start IIFE');
// })();

/////////////////// Замыкания ///////////////////////
// function changeBalance() {
//     let balance = 0;
//     let key = '123';
//     return function(sum) {
//         balance += sum;
//         key = 'pass'
//         console.log(`Баланс: ${balance} Замыкания: ${sum}`);
//     }
// }
// const change = changeBalance();
// change(100);
// change(-50);
// change(200);
// change(300);
// change(450);
// change(500);
// console.dir(change);
//
// const change2 = changeBalance();
// change2(100);
// change2(200);

///////////////////////// Упражнение - работа с замыканиями /////////////////////////////
// const userInfo = {
//     balance: 0,
//     operations: 0,
//     increase(sum) {
//         this.balance += sum;
//         this.operations++;
//     }
// }
//
// function user() {
//     const userObj = {
//         balance: 0,
//         operations: 0,
//         increase(sum) {
//             this.balance += sum;
//             this.operations++;
//         }
//     };
//     return function() {
//         return userObj
//     }
// }
//
// const user1 = user();
// user1().increase(100);
// user1().increase(100);
// console.log(user1());
//
// const user2 = user();
// user2().increase(100);
// console.log(user2());
//
// const user3 = user();
// user3().increase(100);
// console.log(user3());

////////////////////////////////////////     DOCUMENT      /////////////////////////////////////////

// const panelText = document.querySelector('.panel').innerText;
// console.log(panelText);
// document.querySelector('.panel').innerText = 'New Text';
// document.querySelector('.input').value = 'Text';

// document.querySelector('.button').addEventListener('click', function() {
//     const input = document.querySelector('.input').value;
//     if(!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// });

function submitForm() {
    const input = document.querySelector('.input').value;
    if(!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    // document.querySelector('.notification').classList.add('notification_active');
    document.querySelector('.notification').classList.remove('notification_hide');
    // console.log(document.querySelector('.notification').getAttribute('class'));
    // document.querySelector('.notification').setAttribute('class', 'notification');
    // document.querySelector('.notification').setAttribute('key', 1);
    // document.querySelector('.notification').setAttribute('user_id', 1);
    // console.log(Number(document.querySelector('.notification').getAttribute('user_id')));
}

function inputChanged(e) {
    if (e.code === 'Enter') {
        submitForm();
        console.log(e);
    }
}

// console.log(document.querySelector('.one').innerText);
// console.log(document.querySelector('.one ~ div').innerText);
// console.log(document.querySelectorAll('.one')[0].innerText);
// console.log(document.querySelectorAll('.one')[1].innerText);
//
// // console.log(document.querySelector('#two').innerText);
// console.log(document.getElementById('two').innerText);
// console.log(document.getElementsByClassName('one'))
// console.log(document.querySelector('[user-id="4"]').innerText);

const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
// newElement.innerText = 'Кнопка ';
newElement.innerHTML = `<div class="${panelClass}">${panelText}</div>`;
document.querySelector('.test').appendChild(newElement);