const { Vehicle } = require("./vehicleBaseClass");

// extended vehicle class found in mercurySedan.js
class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}
// Methods
loadPassenger(num){
    if (this.passenger < this.maximumPassengers){
        if (this.passenger + num <= this.maximumPassengers){
            this.passenger += num;
            console.log(num + "passenger(s) loaded.");
        }else{
            console.log("No more room");
        }
    } else {
        console.log("Car is full");
    }
}

scheduleService(mileage){
    if (mileage > 30000){
        this.scheduleService = true;
        console.log("Time for maintenance. Service is scheduled");
    } else {
        this.scheduleService = false;
        console.log("No immediate maintenance required");
    }
}