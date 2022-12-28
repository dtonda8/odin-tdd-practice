import {sum, capitalize, reverseString, calculator} from './practice';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Capitalize all-lowercased word', () => {
  expect(capitalize('hello')).toBe('Hello')
});

test('Do nothing for all-uppercase word', () => {
  expect(capitalize('HELLO')).toBe('HELLO')
});

test('Reverse hello to olleh', () => {
  expect(reverseString ('hello')).toBe('olleh')
});

test('calculator add 6 + 3 to equal 9', () => {
  expect(calculator.add(6, 3)).toBe(9)
});

test('calculator subtracts 6 - 3 to equal 3', () => {
  expect(calculator.subtract(6, 3)).toBe(3)
});

test('calculator divides 6 / 3 to equal 2', () => {
  expect(calculator.divide(6, 3)).toBe(2)
});

test('calculator multiplies 6 * 3 to equal 18', () => {
  expect(calculator.multiply(6, 3)).toBe(18)
});