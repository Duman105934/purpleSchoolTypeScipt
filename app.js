"use strict";
// Literalny type dannih
function fethWithAuth(url, method) { }
fethWithAuth('some url', 'get'); // method mozhno peedat tolko 'post' | 'get'
// analog literalnyh typov
// enum RequestType {
// 	GET = 'get',
// 	POST = 'post'
// }
// function fethWithAuth(url: string, method: RequestType) {
// };
// Vozvroshaemy Literalny type dannih
function fethWithAuth_2(url, method) {
    return 1; // mozhno vernut tolko 1 ili -1
}
fethWithAuth('some url', 'get'); // method mozhno peedat tolko 'post' | 'get'
// Privedenie let k konst
let a = 'some text';
//a = 'eny text'
// mozhno prisvoit tolko 'some text' tak kak eto znachenie prisvoen kak type
// po etomu a = 'eny text' ne srabotaet
//----------------------------------------------------------------------------
function fethWithAuth_3(url, some_method) { }
fethWithAuth('some url', 'post');
let some_method = 'post';
//fethWithAuth('some url', some_method); // comment chtoby sdelat tsc
/*
prisvoit method vmesto 'post' tak kak u nego vyshe prisvoeno 'post'
nelzya tak kak u nego klass 'string' a ne 'post' (primer s a: 1 = 1)
*/
// obhodnoe reshenie: var 1
//const some_method = 'post'; // let zamenit na const
// obhodnoe reshenie: var 2
//fethWithAuth('some url', some_method as 'post'); // costanut cherez 'as'
/*
s cast 'as' nado byt akuratnee tak kak vmesto 'post' mozhno peredat chto to drugoe togozhe type
*/
