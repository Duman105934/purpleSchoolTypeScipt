interface User {
  login: string;
  password?: string;
}

const user: User = {
  login: 'mail@mail.ru',
  password: '', // нет данных, знак ? дает возможность не указывать обязательные
};

// --------------------

function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}

console.log(multiply(5));

// --------------------

interface UserPro {
  login: string;
  password?: {
    type: 'primaty' | 'secondary';
  };
}

function testPas(user: UserPro) {
  const t = user.password?.type; // = user.password ? user.password.type : undefined;
}

// --------------------

function test(param?: string) {
  const t = param ?? multiply(5); // если param = null | undefined => multiply(5) короткий вариант записи
}
