"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let lName;
lName = "Souza";
let newName = lName.toUpperCase();
console.log(newName);
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["Souza", "Souza1", "Souza2"];
let numList;
numList = [1, 2, 3, 4, 5];
// let newNum = numList[5]; //There is no element 5 on numList
let results = numList.filter((num) => num > 2);
let emp = empList.find((emp) => emp === "Souza");
let sum = numList.reduce((acc, num) => acc + num);
console.log(result);
console.log(results);
console.log(emp);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
let department; //Avoid using any
// As a good practice, enable on the file tsconfig.json the parameter '"noImplicitAny": true,', by doing so you will prevent some errors during the development process.
department = "IT";
department = 10;
