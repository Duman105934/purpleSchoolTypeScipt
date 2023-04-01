interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: 'Duman',
  age: 35,
};

// Польза от интерфейса можно доопредеять и дополнять свойства, но лучше так делать только
// тогда когда библиотека сторонняя

type ID = string | number;

// использовать желательно только с простыми типами и union
