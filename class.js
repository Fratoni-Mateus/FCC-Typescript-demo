"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        // class Employee implements UserLogin.Login {
        //   private id: number; //No longer recommended
        _Employee_id.set(this, void 0); //Private variable
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    //   address: {  //This will create the need to change the functions that call for an Address
    //     street: string;
    //     city: string;
    //     state: string;
    //     pin: string;
    //   };
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    Login() {
        //   Login(): UserLogin.User {
        return { name: "John", id: 1, email: "" };
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address};`;
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, "John", {
    street: "ABC",
    city: "Bangalore",
    state: "Karnataka",
    pin: "560076",
});
john.empId = 100;
console.log(john.empId);
console.log(Employee.getEmployeeCount());
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
let mike = new Manager(2, "Mike", {
    street: "DEF",
    city: "Bangalore",
    state: "Karnataka",
    pin: "560076",
});
console.log(mike.getNameWithAddress());
