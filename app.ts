// union type (cherez '|')

type httpMethod = 'post' | 'get'; // mozhno otdelno obyavit type dannyh
// type - est tolko v TSC, v JS ego ne budet

function fethWithAuth(url: string, method: httpMethod): 1 | -1 {
  return 1; // mozhno vernut tolko 1 ili -1
}

fethWithAuth('some url', 'post');

// obyavlenie odnorodnogo type
type coolString = string; // coolString mozhno vstavit kak string

//--------------------------------------------------------------------------------------

// type dlya object
type USER = {
  name: string;
  age: number;
  skils: string[];
};

let user: USER = {
  name: 'Duman',
  age: 35,
  skils: ['Dev', 'noDev'],
};

// type dlya intersection (obedenenny iz neskolkih type objects)
type USER_2 = {
  name: string;
  age: number;
  skils: string[];
};

type ROLE = {
  id: number;
};

type USER_2WITHROLE = USER_2 & ROLE; // esli znak '|' ili, esli znak '&' eto i (USER_2 i ROLE)

let user_2: USER_2WITHROLE = {
  name: 'Duman',
  age: 35,
  skils: ['Dev', 'noDev'],
  id: 1,
};

// type dlya intersection s peresekaushimisya svoistvamy
// (obedenenny iz neskolkih type objects)
// esli est peresecheniya odin udalitsya

type USER_3 = {
  name: string; // imya polzovatelya, peresekaetsya s type ROLE_2
  age: number;
  skils: string[];
};

type ROLE_2 = {
  name: string; // imya roly, peresekaetsya s type USER_3
  id: number;
};

type USER_2WITHROLE_2 = {
  user: USER_3;
  role: ROLE_2;
};

// let user_3: USER_2WITHROLE_2 = {
//   name: 'Duman',
//   age: 35,
//   skils: ['Dev', 'noDev'],
//   name: 'Admin',
//   id: 1,
// };
