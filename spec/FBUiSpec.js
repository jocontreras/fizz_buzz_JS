describe('FizzBuzz_UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
    });

    describe("Prompts Result"), function(){
    it("when the button is clicked", function(){
        $('#number').val(3);
        $('#play').trigger('click');
          expect($('display_message').text()).toBe("fizz");
        })
      }

  //  it("Displays Fizz Message if the number is divisible by 3", function() {
  //      expect($('#display_message').text()).toBe('FIzz');
  //  });

  //  it("Displays Buzz Message if the number is divisible by 5", function() {
  //      expect($('#display_message').text()).toBe('Buzz');
  //  });


});
