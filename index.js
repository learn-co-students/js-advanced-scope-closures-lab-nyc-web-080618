function produceDrivingRange(range) {
  return function(start, end) {
    let distance = Math.abs(parseInt(start) - parseInt(end))
      if (distance > range) {
        return `${distance - range} blocks out of range`
      }
      else {
        return `within range by ${distance}`
      }
  }
}

function produceTipCalculator(percent) {
  return function(charge) {
    return charge*percent;
  }
}

function createDriver(){
  let driverId = 0
  return class Driver {
    constructor(name){
      this.id = driverId++ //reference to driverID
      this.name = name;
    }
  }
}
