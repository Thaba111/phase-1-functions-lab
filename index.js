// Code your solution in this file!
//distanceFromHqInBlocks
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); 
  }
  
  //distanceFromHqInFeet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; 
  }

  //distanceTravelledInFeet
  function distanceTravelledInFeet(start, destination) {
    const blocksTraveled = Math.abs(destination - start);
    return blocksTraveled * 264;
  }

  //calculatesFarePrice
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  let fare = 0;
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
      return "I will take your money now"; 
    } else {
      return 'cannot travel that far'; 
    }
  }
