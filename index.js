const produceDrivingRange = function(initialRange){
  return function(startPoint, endPoint){
    let start = parseInt(startPoint)
    let end = parseInt(endPoint)
    const distance = Math.abs(start - end)
    const withinRange = initialRange - distance

    if(withinRange > 0){
      return `within range by ${withinRange}`
    } else {
      return `${Math.abs(withinRange)} blocks out of range`
    }
  }
}


const produceTipCalculator = function(tipPercent){
  return function(price){
    return price * tipPercent
  }
}

const createDriver = function(){
  let driverId = 0
  return class{
    constructor(name){
      this.id = driverId++;
      this.name = name
    }
  }
}
