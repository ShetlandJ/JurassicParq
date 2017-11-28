var Park = function(name){
  this.name = name;
  this.enclosure = [];
}

Park.prototype = {
  addDinosaur: function(dinosaur) {
    this.enclosure.push(dinosaur)
  },
  removeAllDinos: function(){
    this.enclosure = [];
  },
  removeAllDinosByType: function(type){

    for (var dinosaur of this.enclosure) {
      if (dinosaur.type === type) {
        this.enclosure.splice(dinosaur)
      }
    }
  },
  moreThanTwoBabies: function() {
    dinosaurArray = []
    for (var dinosaur of this.enclosure) {
      if (dinosaur.babiesPerYear > 2) {
        dinosaurArray.push(dinosaur)
      }
    }
    return dinosaurArray
  },
  numberOfDinosInParkPerYear: function(yearsPassed){
    var dinosaurBabiesPerYearCount = 0;
    var startingDinoNumber = this.enclosure.length;
    for (var i = 0; i < yearsPassed; i++) {
      for (var dinosaur of this.enclosure) {
        dinosaurBabiesPerYearCount += dinosaur.babiesPerYear
      }
      return (dinosaurBabiesPerYearCount+startingDinoNumber)**yearsPassed;
    }
  }
    //   var dinosaurBabiesPerYearCount = 0;
    //   var startingDinoNumber = this.enclosure.length;
    //
    // for (var i = 0; i < yearsPassed; i++) {
    //   for (var dinosaur of this.enclosure) {
    //     dinosaurBabiesPerYearCount += dinosaur.babiesPerYear
    //   }
    //   }
    //   var dinoCount = startingDinoNumber + dinosaurBabiesPerYearCount;
    //   return dinoCount**yearsPassed;
    // }
  }

  module.exports = Park;
