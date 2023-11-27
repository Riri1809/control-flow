//Part1 Growing pains
const PI = 3.1415
const radius = 5
const area =  PI * radius * radius
console.log (area)

const plantSpace = 0.8
const initialPlants = 20
const week = 1;
const plantDouble = initialPlants * 2 ** week;
let currentCapacity = plantSpace * plantDouble;
console.log(currentCapacity);

let totalSpacerequired = currentCapacity / area;

if ( totalSpacerequired > area * 0.8 ) {
    console.log ("plants need to be destroyed")
} else if (totalSpacerequired >= 0.5 * area && totalSpacerequired <= 0.8 * area ) {
    console.log (" Growth is still being montiored")
} else if ( totalSpacerequired <= 0.5 * area ) {
    console.log (" We have room for more plants")
}

//Thinking bigger
//The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
const newInitialPlant = 100;
const newWeek = 10;
let plantCount = newInitialPlant * (2 ** newWeek); // Calculating plant count after 10 weeks without pruning

const additionalSpaceRequired = (plantCount - currentCapacity) * plantSpace;

console.log(`Additional space required after 10 weeks without pruning: ${additionalSpaceRequired} square meters`);

// Calculate the radius of the expanded garden assuming a circular shape
const expandedArea = PI * (radius ** 2 + (additionalSpaceRequired / PI));
const expandedRadius = Math.sqrt(expandedArea / PI);
console.log(`Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`);

//Part 3: Errors in Judgement
try {
    let plantCount = newInitialPlant * (2 ** newWeek); // Calculating plant count after 10 weeks without pruning

    const additionalSpaceRequired = (plantCount - currentCapacity) * plantSpace;

    if (additionalSpaceRequired > area) {
        throw new Error("Insufficient space to accommodate the plants.");
    }

    // Calculate the radius of the expanded garden assuming a circular shape
    const expandedArea = PI * (radius ** 2 + (additionalSpaceRequired / PI));
    const expandedRadius = Math.sqrt(expandedArea / PI);

    console.log(`Additional space required after 10 weeks without pruning: ${additionalSpaceRequired.toFixed(2)} square meters`);
    console.log(`Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`);
} catch (error) {
    console.error("Error:", error.message);
}