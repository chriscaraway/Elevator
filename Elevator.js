
const EventEmitter = require("events");

class Elevator extends EventEmitter {
	constructor() {
		super();
		this.currentPassenger = null;
		this.currentFloor = 0;
		this.isMoving = false;
	}

	loadPassenger(passenger) {
		this.currentPassenger = passenger;
		throw new Error("passenger " + passenger.name + " is occupying the elevator");
		//console.erro("Passneger " + passenger.name " is occupying the elevator")
		//return;
	}
	unloadPassenger() {
		if (!this.currentPassenger) {
			console.error("No passenger to unload!");
			return;
		}

		this.currentPassenger = null;

	}

goUp() {
	this._move(1)
	}

goDown() {
	this._move(-1)

}

_move(moveType, floorChage) {
	if(this.isMoving) {
		console.error("Elevator is already moving!");
		return;
	}

	this.isMoving = true;

	setTimeout(function() {
		this.isMoving = false;
		this.currentFloor+= floorChage;
		this.emit("up", {
			currrentPassenger: this.currentPassenger,
			currentFloor: this.currentFloor,
		});
	}.bind(this), 1000);
}
}


module.exports = Elevator;
