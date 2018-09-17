function produceDrivingRange(range){
  return (function rangeFn(start, end){
    let start_num = parseInt(start)
    let end_num = parseInt(end)
    if (Math.abs(start_num-end_num)>range){
      return `${Math.abs(start_num-end_num)-range} blocks out of range`
    }else {
      return  `within range by ${range - Math.abs(start_num-end_num)}`
    }
  })
}

function produceTipCalculator(tip){
  return function (fare){
    return tip * fare
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
