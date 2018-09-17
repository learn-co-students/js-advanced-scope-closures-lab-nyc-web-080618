function produceDrivingRange(blockRange){
  return function(startingDistance, endingDistance) {
    let distance = Math.abs(parseInt(startingDistance) - parseInt(endingDistance));

    if (blockRange > distance){
      return `within range by ${blockRange - distance}`;
    }
    else {
      return `${distance - blockRange} blocks out of range`;
    };
  };
};

function produceTipCalculator(tipPercentage){
  return function(fare){
    return (tipPercentage * fare);
  };
};

// const tipCalcTen = produceTipCalculator(.10);
// tipCalcTen(100)
// => 10


function createDriver(){
  let driverId = 0;

  return class Driver{
    constructor(name){
     this.id = driverId++;
     this.name = name;
   };
 };
};
