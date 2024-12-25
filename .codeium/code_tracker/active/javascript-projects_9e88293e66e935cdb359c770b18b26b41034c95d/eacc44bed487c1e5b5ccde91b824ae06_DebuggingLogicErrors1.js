
bc:/Users/jayst/Desktop/javascript-projects/errors-and-debugging/exercises/DebuggingLogicErrors1.js€let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
console.log(launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}
console.log(launchReady);

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}
console.log(launchReady);ú 
úµ 
µ∑ ∑π
πç ç¶
¶® ®™
™¿ ¿¬¬€"(9e88293e66e935cdb359c770b18b26b41034c95d**c:/Users/jayst/Desktop/javascript-projects2jfile:///c:/Users/jayst/Desktop/javascript-projects/errors-and-debugging/exercises/DebuggingLogicErrors1.js:2file:///c:/Users/jayst/Desktop/javascript-projects