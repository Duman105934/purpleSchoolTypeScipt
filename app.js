"use strict";
// var 1: obychnie type
function logId(id) {
    // runtime proverka - suzhenie type-ov
    if (typeof id === 'string') {
        console.log(id); // string
    }
    else if (typeof id === 'number') {
        console.log(id); // number
    }
    else {
        console.log(id); // boolian
    }
}
// var 2: stroka i massiv
function logError(err) {
    // runtime proverka - suzhenie type-ov
    if (Array.isArray(err)) {
        console.log(err); // strokovy massiv
    }
    else {
        console.log(err); // stroka
    }
}
// var 3.1: object s odinakovimy type
function logObject(obj) {
    // runtime proverka - suzhenie type-ov obectov
    if ('a' in obj) {
        console.log(obj.a); // esli a est v obj
    }
    else {
        console.log(obj.b); //
    }
}
// var 3.2: object s multy type
function logMultipleIds(a, b) {
    // runtime proverka - suzhenie type-ov multy obectov
    if (a === b) {
    }
    else {
    }
}
// dopolnitelny vid
let a = 1; // prisvoenie type '1'
// a = 2 // nelzya prisvoit 2 k 'a' s type '1'
