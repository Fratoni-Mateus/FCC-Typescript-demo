import { Login, User } from "./interface";

// import * as UserLogin from "./interface";

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee implements Login {
  // class Employee implements UserLogin.Login {

  //   private id: number; //No longer recommended
  #id: number; //Private variable
  //   id: number;

  protected name: string;

  address: Address;
  //   address: {  //This will create the need to change the functions that call for an Address
  //     street: string;
  //     city: string;
  //     state: string;
  //     pin: string;
  //   };

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: Address) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }

  Login(): User {
    //   Login(): UserLogin.User {
    return { name: "John", id: 1, email: "" };
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address};`;
  }
}

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
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
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
