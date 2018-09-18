function produceDrivingRange(blockRange){
  return function(starting, ending){
    let start = parseInt(starting);
    let end = parseInt(ending);
    let distance = Math.abs(end - start);
    let range = distance - blockRange;
    if (range > 0){
      return `${range} blocks out of range`;
    }
    else {
      return `within range by ${Math.abs(range)}`;
    }
  }
}


function produceTipCalculator(decimal){
  return function (price){
    return price * decimal;
  }
}

function createDriver(){
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
