describe("FizzBuzzCalculator", function() {
  var calculator;

beforeEach(function() {
  number = new FizzBuzzCalculator();
});

it("should return 1 if number 1", function() {
  expect(number.fizz_buzz_calc(1)).toEqual(1);
});

it("should return 2 if number 2", function() {
  expect(number.fizz_buzz_calc(2)).toEqual(2);
});

it("should return 'fizz' if number is divisible by 3", function() {
  expect(number.fizz_buzz_calc(3)).toBe('fizz');
});

it("should return 'buzz' if number is divisible by 5", function() {
  expect(number.fizz_buzz_calc(5)).toBe('buzz');
});

it("should return 'fizz' if number is divisible by 6", function() {
  expect(number.fizz_buzz_calc(6)).toBe('fizz');
});

it("should return 8 if number 8", function() {
  expect(number.fizz_buzz_calc(8)).toEqual(8);
});

it("should return 'buzz' if number is divisible by 10", function() {
  expect(number.fizz_buzz_calc(10)).toBe('buzz');
});

it("should return 'fizzbuzz' if number is divisible by 5 and 3", function() {
  expect(number.fizz_buzz_calc(15)).toBe('fizzBuzz');
});

});
