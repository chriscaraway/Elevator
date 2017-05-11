
const EventEmitter = require("events");

class Elevator extends EventEmitter {
	constructor() {
		super();
		this.currentPassenger = null;
		this.currentFloor = 0;
	}

	loadPassenger(passenger) {
		if (this.currentPassenger) {
			console.error("Passenger" + passenger.name + "is occuppying the elevator");
			return;
		}

		this.currentPassenger = passenger;

	}

	unloadPassenger() {
		if (!this.currentPassenger) {
			console.error("No passenger to unload!");
			return;
		}
		this.currentPassenger = null;

	}

	_move(moveType, floorChange) {

		if(this.isMoving) {
			console.error("Elevator is already moving!");
			return;
		}

	this.isMoving = true;

	setTimeout(function() {
		this.isMoving = false;
		this.currentFloor+= floorChange;
		this.emit(moveType, {
			currrentPassenger: this.currentPassenger,
			currentFloor: this.currentFloor,
		});
	}.bind(this), 1000);
}

	goUp() {
		this._move("up", 1);
		this._move("down", -1);

	}

}


module.exports = Elevator;
