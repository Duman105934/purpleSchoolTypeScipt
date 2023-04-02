function logId(id: string | number) {
  console.log(id);
}

const a = logId(1);

function multiply(f: number, s?: number) {
  if (!s) {
    return f * f;
  }
}

// -----------------------------------
type voisdFunc = () => void; // function которая возвращает тип void

const function_1: voisdFunc = () => {
  // пустая функция
};

const function_2: voisdFunc = () => {
  return true;
};

const b = function_2();

// -----------------------------------
const skills = ['dev', 'devOps'];

const user = {
  s: [''],
};

skills.forEach((skill) => user.s.push(skill));
