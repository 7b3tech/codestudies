"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_decorators_1 = require("core-decorators");
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.getVehicle = function () {
        return this;
    };
    __decorate([
        core_decorators_1.autobind // binds the this variable to an instance of Vehicle
    ], Vehicle.prototype, "getVehicle");
    return Vehicle;
}());
var car = new Vehicle(); // creates an instance of Vehicle called car
var getVehicle = car.getVehicle;
getVehicle() === car; // returns true;
