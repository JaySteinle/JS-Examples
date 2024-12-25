
dc:/Users/jayst/Desktop/javascript-projects/errors-and-debugging/exercises/DebuggingRuntimeErrors2.jsêlet launchReady = false;
let fuelLevel = 27000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8...");
   console.log("Fed parrot...");
   console.log("6, 5, 4...");
   console.log("Ignition...");
   console.log("3, 2, 1...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}
… …†
†ê "(9e88293e66e935cdb359c770b18b26b41034c95d**c:/Users/jayst/Desktop/javascript-projects2lfile:///c:/Users/jayst/Desktop/javascript-projects/errors-and-debugging/exercises/DebuggingRuntimeErrors2.js:2file:///c:/Users/jayst/Desktop/javascript-projects