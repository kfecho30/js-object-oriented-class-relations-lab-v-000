let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
  }
  trips(){}
  passengers(){}
}

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
  }
  trips(){}
  drivers(){}
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
  }
}