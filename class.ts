class Employee {
  //   private id: number; //Not longer recommended
  #id: number; //Private variable
  //   id: number;

  protected name: string;

  address: string;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address};`;
  }
}

let john = new Employee(1, "John", "Highway 71");

john.empId = 100;

console.log(john.empId);

console.log(Employee.getEmployeeCount());

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
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

let mike = new Manager(2, "Mike", "Cherise Drive");

console.log(mike.getNameWithAddress());
