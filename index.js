/// blocks from Scuber HQ (42nd Street)
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation);
  }
  
  // blocks to feet from HQ
  function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(someValue) * feetPerBlock;
  }
  
  //distance travelled in feet between two blocks
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
  }
  
  // fare price based on distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare
    } else {
      return 'cannot travel that far'; // Over 2500 feet not allowed
    }
  }
