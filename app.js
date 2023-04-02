"use strict";
const user = {
    login: 'mail@mail.ru',
    password: '', // нет данных, знак ? дает возможность не указывать обязательные
};
// --------------------
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
console.log(multiply(5));
function testPas(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type; // = user.password ? user.password.type : undefined;
}
// --------------------
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5); // если param = null | undefined => multiply(5) короткий вариант записи
}
