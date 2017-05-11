const Elevator = require("./elevator");
const Passenger = require('./passenger');

const elevator = new Elevator();
let passengers = [
	new Passenger("Peter", 3),
	new Passenger("Paul", 2),
	new Passenger("Mary", 1),
];

let name = Passenger.name;
let floor = Passenger.floor;

function loadElevator() {
	elevator.loadPasenger(passengers.pop());
}

function unloadElevator() {
	elevator.unloadPassenger();
}

elevator.on("up", function(event) {
	console.log("This is floor " + event.currentFloor);
	if (event.currentFloor < elevator.currentPassenger.floor) {
		console.log(elevator.currentPassenger.name + " is going up.");
	}
	if (event.currentFloor === elevator.currentPassenger.floor) {
		console.log("This is " + elevator.currentPassenger.name + "'s floor.");
		unloadElevator();
		elevator.goDown();
	}

	else {
		elevator.goUp();
	}
});

elevator.on("down", function(event) {
	if (event.currentFloor !== 0) {
		elevator.goDown();
	}

	if (passengers.length > 0 && event.currentFloor === 0) {
		loadElevator();
		console.log(elevator.currentPassenger.name + " is in the elevator.");
		elevator.goUp();
	}

	if (passengers.length === 0 && event.currentFloor === 0) {
		loadElevator();
		console.log("Elevator is ready!");
	}
});

loadElevator();
elevator.goUp();
