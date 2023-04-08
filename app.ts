class User {
  userName: string;

  constructor(nameConstuctor: string) {
    this.userName = nameConstuctor;
  }
}

const user = new User('Vasya');
console.log(user);
user.userName = 'Petya';
console.log(user);
