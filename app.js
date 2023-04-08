"use strict";
class User {
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.userName = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const user_1 = new User('Vasya');
const user_2 = new User();
const user_3 = new User(33);
const user_4 = new User('Vasya', 33);
