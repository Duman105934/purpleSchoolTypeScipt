"use strict";
const user = {
    name: 'Вася',
    email: 'vasily@yandex.ru',
    login: 'Vasia',
};
function logId(id) {
    if (typeof id === 'string') {
        console.log(id); // string
    }
    else {
        console.log(id); // number
    }
    //id; // opyat string | number (flow typov)
}
// prostaya forma napisanya funccii type guard
function isString(x) {
    return typeof x === 'string';
}
// vmesto typeof id === 'string'
function logId_2(id) {
    if (isString(id)) {
        console.log(id); // string
    }
    else {
        console.log(id); // number
    }
}
// bolee slozhny variant ispolzovanya type guard
// sperva functiya type guard
function isAdmin(user) {
    return 'role' in user;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('пользователь не Админ');
    }
}
// vtoroi variant napisaniya isAdmin
function isAdminAlternative(user) {
    return user.role !== undefined; // cherez prinuditelnoe castovanie
}
