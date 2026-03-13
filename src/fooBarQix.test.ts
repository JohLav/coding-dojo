import { describe, expect, it } from 'vitest';
import { fooBarQix } from './fooBarQix';

describe('FooBarQix', () => {
  it.each([
    [1, '1'],
    [2, '2'],
    [4, '4'],
  ])('for %i should return %s', (input, output) => {
    expect(fooBarQix(input)).toBe(output);
  });

  it.each([
    [6, 'Foo'],
    [9, 'Foo'],
  ])('%i is divisible by 3 and should return %s', (input, output) => {
    expect(fooBarQix(input)).toBe(output);
  });

  it.each([
    [10, 'Bar'],
    [20, 'Bar'],
  ])('%i is divisible by 5 and should return %s', (input, output) => {
    expect(fooBarQix(input)).toBe(output);
  });

  it.each([
    [14, 'Qix'],
    [28, 'Qix'],
  ])('%i is divisible by 7 and should return %s', (input, output) => {
    expect(fooBarQix(input)).toBe(output);
  });

  it.each([
    [3, 'FooFoo'],
    [3111, 'FooFoo'],
  ])(
    '%i is divisible by 3, contains 3 and should return %s',
    (input, output) => {
      expect(fooBarQix(input)).toBe(output);
    },
  );

  it.each([[33, 'FooFooFoo']])(
    '%i is divisible by 3, contains two 3 and should return %s',
    (input, output) => {
      expect(fooBarQix(input)).toBe(output);
    },
  );

  it.each([[5, 'BarBar']])(
    '%i is divisible by 5, contains 5 and should return %s',
    (input, output) => {
      expect(fooBarQix(input)).toBe(output);
    },
  );

  it.each([[7, 'QixQix']])(
    '%i is divisible by 7, contains 7 and should return %s',
    (input, output) => {
      expect(fooBarQix(input)).toBe(output);
    },
  );

  it.each([[53, 'BarFoo']])(
    '%i contains 5 and 3 and should return %s',
    (input, output) => {
      expect(fooBarQix(input)).toBe(output);
    },
  );

  it.each([[35, 'BarQixFooBar']])(
    '%i is divisible by 5 and 7, contains 3 and 5 and should return %s',
    (input, output) => {
      expect(fooBarQix(input)).toBe(output);
    },
  );

  it.each([[15, 'FooBarBar']])(
    '%i is divisible by 3 and 5, contains 5 and should return %s',
    (input, output) => {
      expect(fooBarQix(input)).toBe(output);
    },
  );

  it.each([[21, 'FooQix']])(
    '%i is divisible by 3 and 7 and should return %s',
    (input, output) => {
      expect(fooBarQix(input)).toBe(output);
    },
  );
});
