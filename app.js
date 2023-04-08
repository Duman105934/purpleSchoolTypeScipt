"use strict";
class User {
    constructor(nameConstuctor) {
        this.userName = nameConstuctor;
    }
}
const user = new User('Vasya');
console.log(user);
user.userName = 'Petya';
console.log(user);
