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

interface Admin {
  name: string;
  role: number;
}

function logId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id); // string
  } else {
    console.log(id); // number
  }
  //id; // opyat string | number (flow typov)
}

// prostaya forma napisanya funccii type guard
function isString(x: string | number): x is string {
  return typeof x === 'string';
}

// vmesto typeof id === 'string'
function logId_2(id: string | number) {
  if (isString(id)) {
    console.log(id); // string
  } else {
    console.log(id); // number
  }
}

// bolee slozhny variant ispolzovanya type guard

// sperva functiya type guard
function isAdmin(user: User | Admin): user is Admin {
  return 'role' in user;
}

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error('пользователь не Админ');
  }
}

// vtoroi variant napisaniya isAdmin
function isAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined; // cherez prinuditelnoe castovanie
}
