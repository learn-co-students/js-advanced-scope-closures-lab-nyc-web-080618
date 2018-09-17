function produceDrivingRange(blockRange){
  return function(start,end){
    let distance = parseInt(end, 10) - parseInt(start, 10);
    let difference = Math.abs(distance-blockRange)
    if(distance<blockRange){
      return `within range by ${difference}`
    }
    else if(distance>blockRange){
      return `${difference} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(amount){
    return amount*percentage
  }
}

function createDriver(){
  return class Driver{
    constructor(name){
      this.name = name
      this.id++
    }
  }
}
