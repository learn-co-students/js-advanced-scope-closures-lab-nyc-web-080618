const produceDrivingRange=function(num){
  return function(b1,b2){
    var distance=b2.slice(0,b2.length-2)-b1.slice(0,b1.length-2)
    if (distance<=num){
      return `within range by ${num-distance}`
    }else {
      return `${distance-num} blocks out of range`
    }
  }
}

const produceTipCalculator=function(num1){
  return function(num2){
    return num1*num2
  }
}

const createDriver=function(){
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
