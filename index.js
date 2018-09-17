function produceDrivingRange(distance){
  return (function (start, end){
    let startInt = parseInt(start)
    let endInt = parseInt(end)
    let range = Math.abs(startInt - endInt)
    if  (range > distance) {
      return `${range - distance} blocks out of range`
    } else {
      return `within range by ${distance - range}`
    }
  })
}

function produceTipCalculator(percentage){
  return (function (fare){
    return fare * percentage
  })
}

function createDriver(){
  let driverId = 0
  return class{
    constructor(name){
    this.name = name
    this.id = ++driverId
    }
  }
}
