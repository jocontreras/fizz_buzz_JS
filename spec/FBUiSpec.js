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

  


});
