var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe( "Dinosaur", function(){
  beforeEach(function(){
    dinosaur = new Dinosaur("T-Rex", 1)
  });

  it("should have a type", function(){
    assert.strictEqual(dinosaur.type, "T-Rex")
  });

  it("should have a number of babies per year", function(){
    assert.strictEqual(dinosaur.babiesPerYear, 1)
  });
});
