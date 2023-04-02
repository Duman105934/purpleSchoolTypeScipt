function generateError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  while (true) {}
}

function rec(): never {
  return rec();
}

type paymentAction = 'refaund' | 'checkout'; // 'reject'

function processaction(action: paymentAction) {
  switch (action) {
    case 'refaund':
      //some process
      break;
    case 'checkout':
      // some process
      break;
    // case 'reject':
    //   // some process
    //   break;
    default: // способ выловить ошибку, если добавят 'reject'
      const _: never = action;
      throw new Error('Нет такого action');
  }
}

// ---------------------

// Исчерповающая проверка
function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }
  generateError('x не string или number');
}
