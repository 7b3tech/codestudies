import { autobind, readonly } from 'core-decorators';

// (function() {
//   console.log('Mr. Seven')
// })()

class Vehicle {
  @autobind
  getVehicle() {
    return this;
  }
}

let car = new Vehicle(); // creates an instance of Vehicle called car
let { getVehicle } = car;

getVehicle() === car; // returns true;

// class Person {
//   getPin() {
//     return `my PIN is ${this.pin}`
//   }
// }

//functional decorators.
// Pattern
//
//Both higher-order component — HOC in React and the connect function in React-Redux 
//library are implemented using this pattern.

// function filterEvenNumbers(list) {
//   if (!list.length) {
//     throw new Error("Array should not be empty!")
//   }
//   return list.filter((listItem) => {
//     if (!Number.isInteger(listItem)) {
//       throw new Error("Array should contain only integers!")
//     }
//     return listItem % 2 === 0
//   })
// }

// function handleError(func1) {
//   return (list) => {
//     try {
//       const result = func1(list)
//       return result;
//     } catch (error) {
//       console.log("Error is:", error.message)
//     }
//   }
// }

// const h = handleError(filterEvenNumbers)([1, 2, 3, 4])
// console.log(h)

// function newPhone() {
//   return (t) => console.log(t)
// }

// newPhone()('MI');
// //--------------------------.



class Person {
  @readonly
  getName() { return ${ this.first } ${ this.last } };
}
