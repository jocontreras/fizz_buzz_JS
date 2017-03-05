
/*var onReadyEvents = function(){
  $('#click_me').click(function() {
    var text = $('#text').val();
    $('#display_message').html(text);
  });
}
*/

$(document).ready(function(){
 $('#bgpicture').show();
  $('#play').click(function () {
    var num = ($('#number').val());
    var calculator = new FizzBuzzCalculator();
    var message = calculator.fizz_buzz_calc(num);
    $('#display_message').html(message);
  });
}
