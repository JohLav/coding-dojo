import { expect, test } from 'vitest';

class Employee {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static compare(employee1, employee2) {
    if (employee1.name.toUpperCase() < employee2.name.toUpperCase()) {
      return -1;
    }
    if (employee1.name.toUpperCase() > employee2.name.toUpperCase()) {
      return 1;
    }
    return 0;
  }
}

const employees: Employee[] = [
  new Employee('Max', 17),
  new Employee('Sepp', 18),
  new Employee('Nina', 15),
  new Employee('mike', 51),
];

function filterAllowedWorkOnSundays(employees) {
  return employees.filter((employee) => employee.age >= 18);
}

test('should give a list of employees who are 18 years or old allowed to work on Sundays', () => {
  expect(filterAllowedWorkOnSundays(employees)).toStrictEqual([
    new Employee('Sepp', 18),
    new Employee('mike', 51),
  ]);
});

function sortEmployeesByName(employees: Employee[]): Employee[] {
  return [...employees].sort(Employee.compare);
}

test('should give the list of employees sorted by name', () => {
  expect(sortEmployeesByName(employees)).toStrictEqual([
    new Employee('Max', 17),
    new Employee('mike', 51),
    new Employee('Nina', 15),
    new Employee('Sepp', 18),
  ]);
});

function toCapitalized(employees: Employee[]): Employee[] {
  return employees.map(
    (employee) => new Employee(employee.name.toUpperCase(), employee.age),
  );
}

test('should give the list of employees capitalized', () => {
  expect(toCapitalized(employees)).toStrictEqual([
    new Employee('MAX', 17),
    new Employee('SEPP', 18),
    new Employee('NINA', 15),
    new Employee('MIKE', 51),
  ]);
});
