"use strict";
// union type (cherez '|')
// type - est tolko v TSC, v JS ego ne budet
function fethWithAuth(url, method) {
    return 1; // mozhno vernut tolko 1 ili -1
}
fethWithAuth('some url', 'post');
let user = {
    name: 'Duman',
    age: 35,
    skils: ['Dev', 'noDev'],
};
let user_2 = {
    name: 'Duman',
    age: 35,
    skils: ['Dev', 'noDev'],
    id: 1,
};
// let user_3: USER_2WITHROLE_2 = {
//   name: 'Duman',
//   age: 35,
//   skils: ['Dev', 'noDev'],
//   name: 'Admin',
//   id: 1,
// };
