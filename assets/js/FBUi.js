
$(document).ready(function () {
  $('#play').click(function () {
    var num = ($('#number').val());
    var calculator = new FizzBuzzCalculator();
    var message = calculator.fizz_buzz_calc(num);
    $('#display_message').html(message);
  });
});
