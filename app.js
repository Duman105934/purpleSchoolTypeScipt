"use strict";
const getFullNameArrow = (firstName, surName) => {
    return `${firstName} ${surName}`;
};
// function getFullName(firstName, surName) {
//   if (typeof firstName !== 'string') {
//     throw new Error('!!!!');
//   }
//   return `${firstName} ${surName}`;
// }
console.log(getFullNameArrow('Duman', 'Makulbekov'));
