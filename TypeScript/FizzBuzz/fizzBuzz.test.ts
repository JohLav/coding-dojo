import { expect, test } from 'vitest';

const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const FIZZBUZZ = 'FizzBuzz';

function fizzBuzz(input: number): string {
  if (typeof input !== 'number' || isNaN(input)) {
    throw new Error('Invalid input');
  }
  if (isMultipleOf3And5(input)) return FIZZBUZZ;
  if (isMultipleOf3(input)) return FIZZ;
  if (isMultipleOf5(input)) return BUZZ;
  return input.toString();
}

function isMultipleOf3And5(input: number) {
  return isMultipleOf3(input) && isMultipleOf5(input);
}

function isMultipleOf3(input: number) {
  return input % 3 === 0;
}

function isMultipleOf5(input: number) {
  return input % 5 === 0;
}

test.each([
  [1, '1'],
  [2, '2'],
  [7, '7'],
  [0, FIZZBUZZ],
  [-3, FIZZ],
  [-5, BUZZ],
  [-15, FIZZBUZZ],
])('should return %s with input %i', (input, expected) => {
  expect(fizzBuzz(input)).toBe(expected);
});

test.each([[3], [6], [9], [-3]])('should return "Fizz" with input %i', (input) => {
  expect(fizzBuzz(input)).toBe(FIZZ);
});

test.each([[5], [10], [-5]])('should return "Buzz" for input %i', (input) => {
  expect(fizzBuzz(input)).toBe(BUZZ);
});

test.each([[15], [30], [-15]])('should return "FizzBuzz" for input %i', (input) => {
  expect(fizzBuzz(input)).toBe('FizzBuzz');
});

test('should handle large multiples correctly', () => {
  expect(fizzBuzz(3000)).toBe('FizzBuzz');
});

test('should throw an error for non-numeric input', () => {
  expect(() => fizzBuzz(NaN)).toThrow('Invalid input');
})
