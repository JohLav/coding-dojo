import { expect, test } from 'vitest';

function isALeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

test('should be a leap year for 2000', () => {
  expect(isALeapYear(2000)).toBe(true);
});

test('should not be a leap year for 1700, 1800, 1900, 2100', () => {
  expect(isALeapYear(1700)).toBe(false);
  expect(isALeapYear(1800)).toBe(false);
  expect(isALeapYear(1900)).toBe(false);
  expect(isALeapYear(2100)).toBe(false);
});

test('should be a leap year for 2008, 2012, 2016', () => {
  expect(isALeapYear(2008)).toBe(true);
  expect(isALeapYear(2012)).toBe(true);
  expect(isALeapYear(2016)).toBe(true);
});

test('should not be a leap year for 2017, 2018, 2019', () => {
  expect(isALeapYear(2017)).toBe(false);
  expect(isALeapYear(2018)).toBe(false);
  expect(isALeapYear(2019)).toBe(false);
});
