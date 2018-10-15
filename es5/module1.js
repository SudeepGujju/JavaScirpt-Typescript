"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("1");
const module2_1 = require("./module2");
console.log("3");
let completePerson = {
    fName: "sudeep",
    lName: "deepu",
    age: 10
};
let partialPerson = {
    fName: "sudeep",
    lName: "deepu"
};
let square = new module2_1.Square(5, 10);
console.log(square.getLength());
square.setLength(15);
console.log(square.Breadth);
square.Breadth = 25;
//# sourceMappingURL=module1.js.map