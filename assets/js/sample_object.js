function FizzBuzzCalculator(){
}

FizzBuzzCalculator.prototype.fizz_buzz_calc = function(num){
  if (num === 0){
        return num;}
      else if(num % 3 === 0 && num % 5 === 0)
        return ("fizzBuzz");
      else if(num % 5 === 0)
        return ("buzz");
      else if(num % 3 === 0)
        return ("fizz")
      else
        return num;
};

/*function SampleObject() {};

SampleObject.prototype.myFirstFunction = function() {
  this.someAttribyte = 'Yay!'
}

SampleObject.prototype.mySecondFunction = function (val_1, val_2) {
  var result = val_1 + val_2;
  return result
}

SampleObject.prototype.myThirdFunction = function() {
  return true;
}
*/
