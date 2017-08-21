var MathService = require('./exercise1.js');
var assert = require('assert');


describe("MathService", function(){
  describe('remoteMathService', function(){

    it("should yield answer of 3.", function(){
      return MathService.remoteMathService(function(err, answer){
        assert.equal(3, answer);
      });
    });
  });

  describe("#callOneService", function(){
    it('should yield value of 1', function(){
      return MathService.callOneService(function(err, value){
        assert.equal(1, value);
      });
    });
  });

  describe("#callTwoService", function(){
    it('should yield value of 2', function(){
      return MathService.callTwoService(function(err, value){
        assert.equal(2, value);
      });
    });
  });

});
