var assert = require("assert");
var Park = require("../park.js")
var Dinosaur = require("../dinosaur.js");

describe( "Park", function(){
  beforeEach(function(){

    testPark = new Park("Not-Jurassic Park", [])

    tRex = new Dinosaur("T-Rex", 1)
    velociraptor = new Dinosaur("Velociraptor", 5)
    stegasaurus = new Dinosaur("Stegasaurus", 1)
    bronotosaurus = new Dinosaur("Bronotosaurus", 2)
    dinosaurEnclosure = [tRex, velociraptor, stegasaurus, bronotosaurus]
    jurassicPark = new Park("Jurassic Park", dinosaurEnclosure)
  });

  it("should start with an empty enclosure", function(){
    assert.strictEqual(testPark.enclosure.length, 0)
  });

  it("should be able to add a dinosaur to the park", function(){
    testPark.addDinosaur("tRex")
    assert.strictEqual(testPark.enclosure.length, 1)
  });

  it("should be able to remove all dinosaurs", function(){
    testPark.addDinosaur(tRex)
    testPark.addDinosaur(stegasaurus)
    testPark.removeAllDinosByType("T-Rex")
    assert.strictEqual(testPark.enclosure.length, 0)
  });

  it("should get all dinosaurs who produce more than two babies per year", function(){
    testPark.enclosure.push(tRex);
    testPark.enclosure.push(velociraptor);
    testPark.enclosure.push(stegasaurus);
    testPark.enclosure.push(bronotosaurus);
    var dinoCount = testPark.moreThanTwoBabies().length;
    assert.strictEqual(dinoCount, 1)
  });

  it("should show how many babies after one year starting with one dinosaur", function(){
    testPark.enclosure.push(tRex);
    var dinoCount = testPark.numberOfDinosInParkPerYear(1);
    assert.strictEqual(dinoCount, 2)
  });

  it("should show how many babies after two years starting with one dinosaur", function(){
    testPark.enclosure.push(tRex);
    var dinoCount = testPark.numberOfDinosInParkPerYear(2);
    assert.strictEqual(dinoCount, 4)
  });

  it("should show how many babies after two years starting with two dinosaurs", function(){
    testPark.enclosure.push(tRex);
    testPark.enclosure.push(stegasaurus);
    var dinoCount = testPark.numberOfDinosInParkPerYear(2);
    assert.strictEqual(dinoCount, 16)
  });

  it("should show how many babies after three years starting with two dinosaurs because I'm not one million percent confident that I have this equation right but if this one works I'm submitting this homework and feeling happy with myself", function(){
    testPark.enclosure.push(tRex);
    testPark.enclosure.push(stegasaurus);
    var dinoCount = testPark.numberOfDinosInParkPerYear(3);
    assert.strictEqual(dinoCount, 64)
  });

});
