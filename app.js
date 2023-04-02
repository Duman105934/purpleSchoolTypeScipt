"use strict";
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
function processaction(action) {
    switch (action) {
        case 'refaund':
            //some process
            break;
        case 'checkout':
            // some process
            break;
        // case 'reject':
        //   // some process
        //   break;
        default: // способ выловить ошибку, если добавят 'reject'
            const _ = action;
            throw new Error('Нет такого action');
    }
}
// ---------------------
// Исчерповающая проверка
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('x не string или number');
}
