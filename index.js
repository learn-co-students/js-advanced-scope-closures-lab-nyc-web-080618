function produceDrivingRange(outerNum){
  return function(n1,n2){
    n1 = n1.replace("th","")
    n1 = parseInt(n1)
    n2 = n2.replace("th","")
    n2 = parseInt(n2)
    //mystring = mystring.replace('/r','/');
    if (Math.abs(n1 - n2) > outerNum){
      return Math.abs(n1-n2) - outerNum + " blocks out of range";
    }
    else {
      return "within range by " + (outerNum - Math.abs(n1-n2));
    }
  }
}

function produceTipCalculator(outerNum){
  return function(n){
    return outerNum * n;
  }
}
function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = driverId += 1
      this.name = name
    }
  }
}
