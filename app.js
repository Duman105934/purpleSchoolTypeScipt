"use strict";
function isAdmin(user) {
    return 'role' in user;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('пользователь не Админ');
    }
}
