const Elevator = require("./elevator");
const Passenger = require('./passenger');

const elevator = new Elevator();
const passenger = new Passenger("Will", 1);
const passenger = new Passenger("Chris", 2);
const passenger = new Passenger("Molly", 3);

elevator.loadPassenger(passenger);

console.log(elevator);
console.log(passenger);


elevator.unloadPassenger();

console.log(elevator.currentPassenger);
