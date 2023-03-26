"use strict";
function getFullNameArrow(userEntity) {
    //   userEntity.firstName;
    //   userEntity.surName;
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
// user.firstName,
// user.surName,
// user.age,
// user.city,
// user.scils.dev
// user.scils.devOps
console.log(getFullNameArrow(user));
