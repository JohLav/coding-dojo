function isMultipleOf7(input: number) {
  return isMultipleOfN(input, 7);
}

function isMultipleOf5(input: number) {
  return isMultipleOfN(input, 5);
}

function isMultipleOf3(input: number) {
  return isMultipleOfN(input, 3);
}

function isMultipleOfN(input: number, n: number) {
  return input % n === 0;
}

function occurrencesOfFooBarQixIn(input: number) {
  return input
    .toString()
    .split('')
    .filter((letter) => letter === '3' || letter === '5' || letter === '7')
    .map((letter) => (letter === '3' ? 'Foo' : letter))
    .map((letter) => (letter === '5' ? 'Bar' : letter))
    .map((letter) => (letter === '7' ? 'Qix' : letter))
    .join('');
}

export function fooBarQix(input: number): string {
  let output = '';

  if (isMultipleOf3(input)) output += 'Foo';
  if (isMultipleOf5(input)) output += 'Bar';
  if (isMultipleOf7(input)) output += 'Qix';

  output += occurrencesOfFooBarQixIn(input);

  if (output !== '') return output;

  return input.toString();
}
