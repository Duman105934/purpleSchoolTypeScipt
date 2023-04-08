// обычные переменные
let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = '123';
let d: number = parseInt(c);

// объектные переменные

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: 'Вася',
  email: 'vasily@yandex.ru',
  login: 'Vasia',
};
// 2 variant: as User
// 3 variant: <User> - ne zhelatelno tak kak est peresechenie s JSX

interface Admin {
  name: string;
  role: number;
}

// prisvoenie cherez spred operator
const admin: Admin = {
  ...user,
  role: 1,
};

// zhelatelny sposob preobrazovaniya cherez function
function userToAdmin(user: User): Admin {
  return {
    name: user.name,
    role: 1,
  };
}
