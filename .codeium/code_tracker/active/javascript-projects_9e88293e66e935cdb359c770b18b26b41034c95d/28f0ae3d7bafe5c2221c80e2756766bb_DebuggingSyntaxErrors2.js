
cc:/Users/jayst/Desktop/javascript-projects/errors-and-debugging/exercises/DebuggingSyntaxErrors2.jsÅ//This block of code hides two syntax errors.

// Run the code and find the mistakes. 
// Only ONE error will be flagged at a time. 
// Fix that ONE problem, and then re-run the code to check yer work. Avoid trying to fix multiple issues at once.

let launchReady = false;
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log(("10, 9, 8, 7, 6, 5, 4, 3, 2, 1..."));
   console.log("Fed parrot...");
   console.log("Ignition...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}Ó ÓÔ
ÔÅ "(9e88293e66e935cdb359c770b18b26b41034c95d**c:/Users/jayst/Desktop/javascript-projects2kfile:///c:/Users/jayst/Desktop/javascript-projects/errors-and-debugging/exercises/DebuggingSyntaxErrors2.js:2file:///c:/Users/jayst/Desktop/javascript-projects