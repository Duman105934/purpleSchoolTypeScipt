let input: unknown;
input = 3;
input = ['1', '12'];

function run(i: unknown) {
  if (typeof i === 'number') {
    i++;
  } else {
    i;
  }
}

run(input);

//--------------------

async function getData() {
  try {
    await fetch('');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

async function getDataForce() {
  try {
    await fetch('');
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
}

type u1 = unknown | number; // unknown

type i1 = unknown & string; // string
