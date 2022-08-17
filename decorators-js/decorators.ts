
import { autobind } from 'core-decorators';

class Vehicle {
  @autobind // binds the this variable to an instance of Vehicle
  getVehicle() {
    return this;
  }
}

let car = new Vehicle(); // creates an instance of Vehicle called car
let { getVehicle } = car;

getVehicle() === car; // returns true;
