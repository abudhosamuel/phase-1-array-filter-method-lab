// Code your solution here
// Function to find drivers whose names match the provided string (case insensitive)
function findMatching(drivers, query) {
    return drivers.filter(driver =>
        driver.toLowerCase() === query.toLowerCase()
    );
}

// Function to find drivers whose names begin with the provided letters (case insensitive)
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
        driver.toLowerCase().startsWith(letters.toLowerCase())
    );
}

// Function to find drivers whose name matches the provided string in an array of objects
function matchName(drivers, name) {
    return drivers.filter(driver =>
        driver.name.toLowerCase() === name.toLowerCase()
    );
}

// Example usage:
const drivers = ["Sam", "Samantha", "John", "Jane"];

console.log(findMatching(drivers, "sam")); // Output: ["Sam", "Samantha"]
console.log(fuzzyMatch(drivers, "sa"));   // Output: ["Sam", "Samantha"]
console.log(matchName([{ name: "Sam", hometown: "NYC" }, { name: "Jane", hometown: "LA" }], "Sam"));
// Output: [{ name: "Sam", hometown: "NYC" }]
