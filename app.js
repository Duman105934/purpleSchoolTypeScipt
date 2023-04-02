"use strict";
function logId(id) {
    console.log(id);
}
const a = logId(1);
function multiply(f, s) {
    if (!s) {
        return f * f;
    }
}
const function_1 = () => {
    // пустая функция
};
const function_2 = () => {
    return true;
};
const b = function_2();
// -----------------------------------
const skills = ['dev', 'devOps'];
const user = {
    s: [''],
};
skills.forEach((skill) => user.s.push(skill));
