"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class Employee {
    constructor(id, name, address) {
        //   private id: number; //Not longer recommended
        _Employee_id.set(this, void 0); //Private variable
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address};`;
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, "John", "Highway 71");
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";
let address = john.getNameWithAddress();
console.log(john);
console.log(address);
let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
