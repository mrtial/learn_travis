var code = require('../main');
var expect = require('chai').expect;


describe('Hello', function() {
  it('should return hello', function(){
  	expect(code.hello()).to.equal("Hello World")
  });
});

describe('hi', function() {
  it('should return hi', function(){
  	expect(code.sayHi()).to.equal("Hi")
  });
});