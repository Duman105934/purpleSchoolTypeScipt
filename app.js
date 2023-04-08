"use strict";
// обычные переменные
let a = 5;
let b = a.toString();
let e = new String(a).valueOf();
let f = new Boolean(a).valueOf();
let c = '123';
let d = parseInt(c);
const user = {
    name: 'Вася',
    email: 'vasily@yandex.ru',
    login: 'Vasia',
};
// prisvoenie cherez spred operator
const admin = Object.assign(Object.assign({}, user), { role: 1 });
// zhelatelny sposob preobrazovaniya cherez function
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1,
    };
}
