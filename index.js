 function produceDrivingRange(blockRange){
   return function(pointA, pointB){
     const distance = Math.abs(parseInt(pointA) - parseInt(pointB));
     if (distance > blockRange){
       return `${distance - blockRange} blocks out of range`
     }
     else {
       return `within range by ${distance}`
     }
   }
 }

 function produceTipCalculator(tipPercentage){
  return function(fare){
    return (fare*tipPercentage);
  }
 }

 function createDriver(){
   let driverId = 0;
   return class Driver{
     constructor(name){
       this.id = driverId++;
       this.name = name;
     }
   }
 }
