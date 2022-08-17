
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

console.log(getVehicle);

function filterEvenNumbers (list:number[]) {
    if(!list.length) {
        throw new Error ("Array should not be empty!")
    }
    return list.filter((listItem) => {
        if(!Number.isInteger(listItem)) {
            throw new Error("Array should contain only integers!")
        }
        return listItem % 2 === 0
    })
}

function handleError (func1:Function) {
    return (list:number[]) => {
        try {
            const result = func1(list)
            return result;
        }catch(error) {
            if( error instanceof Error){
            console.log("Error is:", error.message)
      }
        }
    }
}

console.log(handleError(filterEvenNumbers)([1,2,3,4]) );
handleError(filterEvenNumbers)([]) // prints Error is: Array should not be empty!
handleError(filterEvenNumbers)([2,3.1])
