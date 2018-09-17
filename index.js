function produceDrivingRange(num){
  return function innerFunc (str1, str2) {
    let distance = Math.abs(str1.slice(0, -2) - str2.slice(0, -2));
    if (distance > num) {
      return `${distance - num} blocks out of range`;
    } else {
      return `within range by ${distance}`;
    }
  }
}

function produceTipCalculator(percentage){
  return function innerFunc(tip){
    return tip * percentage;
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
