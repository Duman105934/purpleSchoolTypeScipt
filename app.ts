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

enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 'p',
  FAILED = 'f',
}

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

function action(status: StatusCode) {}

action(StatusCode.SUCCESS);
action(1);
//action('p');  // takoi var ne budet rabotat,
// tak kak enum hot i generic no vse eshe ostaetsya number

function compute() {
  return 3;
}

enum Roles {
  ADMIN = 1,
  MANAGER = 1 + 1, // mozhno delat rasxhety s chislamy
  USER = compute(), // mozhno vizivat function
}

// constantny enum

const enum Roles_2 {
  ADMIN = 1,
  MANAGER = 2,
}

const result_2 = Roles_2.ADMIN;
