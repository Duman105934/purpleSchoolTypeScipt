"use strict";
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
const resultat = skills
    .filter((s) => s !== 'DevOps')
    .map((s) => s + '! ')
    .reduce((a, b) => a + b);
console.log(resultat);
// const skills: string[] = ['Dev', 'DevOps', 'Testing'];
// for (const skill of skills) {
//   console.log(skill.toUpperCase());
// }
// const resultat = skills
//   .filter((s: string) => s !== 'DevOps')
//   .map((s) => {
//     return 1;
//   })
//   .reduce((a, b) => a + b);
// console.log(resultat);
