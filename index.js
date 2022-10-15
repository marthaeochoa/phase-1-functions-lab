// Code your solution in this file!
const block = 42
const feet = 264

function distanceFromHqInBlocks(distance){
    if(distance > block){
        return distance - block;
    } else if (distance < block){
        return block - distance;
    }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * feet
}

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination - start) * feet
    } else {
        return (start - destination) * feet
    }
}