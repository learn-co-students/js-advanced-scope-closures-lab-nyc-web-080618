function produceDrivingRange(range){
  return function(starting, end){
    let distanceToTravel = Math.abs(parseInt(end) - parseInt(starting))
    let difference = range - distanceToTravel

    if (difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip){
  return function (total){
    return total * tip;
  }
}

function createDriver(){
  let driverId = 0;
  return class{
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
