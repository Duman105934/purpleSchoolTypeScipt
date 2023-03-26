"use strict";
// var 1: chislovie enum
// enum StatusCode {
//   SUCCESS = 1,
//   IN_PROCESS = 2,
//   FAILED = 3,
// }
// const result = {
//   message: 'Платеж успешен',
//   statusCode: StatusCode.SUCCESS,
// };
// // 1 = успех
// // 2 = в процессе
// // 3 = отклонен
// if (result.statusCode === StatusCode.SUCCESS) {
//   console.log('Vse OK');
// }
// var 2: strokoviye enum
// enum StatusCode {
//   SUCCESS = 's',
//   IN_PROCESS = 'p',
//   FAILED = 'f',
// }
// const result = {
//   message: 'Платеж успешен',
//   statusCode: StatusCode.SUCCESS,
// };
// // 's' = успех
// // 'p' = в процессе
// // 'f' = отклонен
// if (result.statusCode === StatusCode.SUCCESS) {
//   console.log('Vse OK');
// }
// var 3: geterogennie enum
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const result = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS,
};
// 1 = успех
// 'p' = в процессе
// 'f' = отклонен
if (result.statusCode === StatusCode.SUCCESS) {
    console.log('Vse OK');
}
function action(status) { }
action(StatusCode.SUCCESS);
action(1);
//action('p');  // takoi var ne budet rabotat,
// tak kak enum hot i generic no vse eshe ostaetsya number
function compute() {
    return 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["MANAGER"] = 2] = "MANAGER";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));
const result_2 = 1 /* Roles_2.ADMIN */;
