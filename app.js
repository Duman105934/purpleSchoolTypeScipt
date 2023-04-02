"use strict";
// null можно присвоить
const n0 = null;
const n1 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null; // явное присвоение null если в БД действительно нет такого user
    }
    else {
        return {
            name: 'Вася',
        };
    }
}
const user = getUser();
if (user) {
    const n6 = user.name;
}
