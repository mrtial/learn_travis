var code = require('../main');
var expect = require('chai').expect;


  describe('Hello', function() {
    it('should return hello', function(){
    	expect(code.hello()).to.equal("Hello World")
    });
  });