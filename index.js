// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const hq = 42
    if(someValue>=42)  {
       return (someValue - hq);
    } else {
        return (hq-someValue);
    }
    
}

distanceFromHqInBlocks(43);

function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue) * 264;
}

distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination) {
    if (destination>start){
        return ((destination-start)*264)
} else{
    return ((start-destination)*264)
}
}

distanceTravelledInFeet(43,48);

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if(distance <= 400){
        return 0;
    } else if (distance> 400 && distance <= 2000) {
        return .02 * (distance - 400)
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else{
        return "cannot travel that far"
    }
}

calculatesFarePrice(34,32);
