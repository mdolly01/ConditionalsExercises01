// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady	= true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 400;
let shuttleSpeed = 15000;
let fuelLevel = 5001;
let engineTemperature = 4000;




// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if (crewStatus === true) {
   console.log("Crew Ready");
} else {
  console.log("Crew Not Ready");
}

if (computerStatusCode === 200) {
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
  console.log("Success! Computer online.");
} else {
  console.log("ALERT: Computer offline!");
}

if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable speed");
}

if (fuelLevel > 20000 && engineTemperature < 2500) {
  console.log("Full Tank. Engine is good.");
} else if (fuelLevel < 10000 && fuelLevel > 5000 && engineTemperature < 2500) {
  console.log("Fuel level above 50%.  Engines good.");
} else if (fuelLevel < 5000 && engineTemperature < 2500) {
  console.log("Fuel level above 25%. Engines good.");
}

if (fuelLevel <= 5000 || engineTemperature > 2500) {
  console.log("Check fuel level. Engines running hot.")
} else if (fuelLevel < 1000 || engineTemperature > 350 || engineIndicatorLight === "red blinking")
{
  console.log("ENGINE FAILURE IMMINENT!");
} else {
  console.log("Fuel and engine status pending...")
}
