"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = {
    name: "John",
    id: 1,
    email: "",
};
let employee = { name: "John", id: 1, email: "", salary: 1000 };
let [user1, user2, ...restUsers] = [
    {
        name: "John",
        id: 1,
        email: "",
    },
    {
        name: "John1",
        id: 2,
        email: "",
    },
    {
        name: "John2",
        id: 3,
        email: "",
    },
    {
        name: "John3",
        id: 4,
        email: "",
    },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter((user) => user.id > 3);
console.log(result);
// @Component({}) //This is a decorator, you should not use it on TS or JS as they are experimental, but on Angular they are used internally. A decorator can be applied to change the behavior at runtime of a property, method or class. If you want to use a decorator you need to enable it on the tsconfig.json file.
class Component {
    constructor(name) {
        this.name = name;
    }
}
