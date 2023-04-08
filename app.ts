interface User {
  name: string;
  email: string;
  login: string;
}

interface Admin {
  name: string;
  role: number;
}

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
