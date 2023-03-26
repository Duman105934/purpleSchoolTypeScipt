"use strict";
function getFullNameArrow(userEntity) {
    return `${userEntity.firstName} ${userEntity.surName}`;
}
const user = {
    firstName: 'Duman',
    surName: 'Makulbekov',
    city: 'Almaty',
    age: 35,
    scils: {
        dev: false,
        devOps: false,
    },
};
console.log(getFullNameArrow(user));
