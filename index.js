// Function to return all drivers that match the passed in name
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to return drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to check if name matches in an object data structure
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Mock data for testing
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

// Testing the functions
console.log(findMatching(drivers, 'Bobby')); // [ 'Bobby', 'Bobby' ]
console.log(findMatching(drivers, 'bobby')); // [ 'Bobby', 'Bobby' ]
console.log(findMatching(drivers, 'Susan')); // []

console.log(fuzzyMatch(drivers, 'Sa')); // [ 'Sammy', 'Sally' ]
console.log(fuzzyMatch(drivers, 'y')); // []
console.log(fuzzyMatch(drivers, 'B')); // [ 'Bobby', 'Bobby' ]

// Mock data with objects for testing matchName
let driverObjects = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Sarah', hometown: 'San Francisco' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
];

console.log(matchName(driverObjects, 'Bobby')); // [{ name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' }]
console.log(matchName(driverObjects, 'Sammy')); // [{ name: 'Sammy', hometown: 'New York' }]
console.log(matchName(driverObjects, 'Susan')); // []
