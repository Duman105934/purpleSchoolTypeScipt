"use strict";
// var 1: koroti variant zapisi readonly
const skill = [1, 'Dev']; // kombinaciya tipov
// const skils: readonly string[] = ['Dev', 'DevOps']; // odinarny tip, esli odinarny tip pishetsya vne skobok
//skils[0] = '' // nelzya izmenit esli readonly
//skils.push('novoe znachenie') // nelzya dobavit esli readonly
// var 2: dop variant
const skils = ['Dev', 'DevOps']; // kak generic
//const skils: Array<string> = ['Dev', 'DevOps']; // generic
