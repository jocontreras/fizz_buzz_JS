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

it("should return 'fizzbuzz' if number is divisible by 5 and 3", function() {
  expect(number.fizz_buzz_calc(15)).toBe('fizzBuzz');
});

});

/*
describe("SampleObject", function() {
  var subject;

  beforeEach(function() {
    subject = new SampleObject();
  });

  it("#myFirstFunction set a Yay! as attribute", function() {
    subject.myFirstFunction();
    expect(subject.someAttribyte).toEqual('Yay!');
  });

  it("#mySecondFunction adds two numbers together", function() {

    expect(subject.mySecondFunction(10, 5)).toEqual(15);
  });

  it("#myThirdFunction adds two numbers together", function() {

    expect(subject.myThirdFunction()).toEqual(true);
  });

});
*/
