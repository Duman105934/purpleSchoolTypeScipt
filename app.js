"use strict";
class User {
    set setLogin(l) {
        this._login = 'user-' + l;
    }
    get getLogin() {
        return 'no_login';
    }
}
const user = new User();
user.setLogin = 'my_login';
console.log(user);
console.log(user.getLogin);
