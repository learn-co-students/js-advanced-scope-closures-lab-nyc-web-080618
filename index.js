function produceDrivingRange(blockRange) {
  return function(address1, address2) {
    let distance = Math.abs(parseInt(address2) - parseInt(address1))
      if (distance > blockRange){
        return `${distance - blockRange} blocks out of range`
      }else {
        return `within range by ${blockRange - distance}`
      }
  }
}

function produceTipCalculator(tip) {
  return function (amount) {
    return amount * tip
  }
}

const createDriver = function(){
  let driverId = 0
  return class Driver{
    constructor(name){
      this.id = driverId++;
      this.name = name
    }
  }
}
