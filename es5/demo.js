"use strict";
function fnHoistingVar(input) {
    if (input === 'a')
        greet = 'Hoisting if';
    else
        greet = "Hoisting else";
    console.log(greet);
    var greet = "";
}
fnHoistingVar("a");
function fnHoistingLet(input) {
    let greet;
    if (input === 'a') {
        greet = 'block scope let if';
    }
    else {
        greet = "block scope let else";
    }
    console.log(greet);
}
fnHoistingLet("a");
var a = 1, b = 2;
if (a === 1) {
    var a = 10;
    let b = 20;
    console.log(a, b);
}
console.log(a, b);
const num = 10;
const ConstObj = { key: "one" };
console.log(ConstObj.key);
ConstObj.key = "two";
console.log(ConstObj.key);
for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, 1000);
}
for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, 1000);
}
const func = () => {
    return 20;
};
const func1 = (value) => 20 * value;
console.log(func1(10));
const func2 = (param1 = 10, param2 = 20, param3 = func1(10)) => {
    console.log(10 * param1 + param2 + param3 + "param");
};
func2();
func2(5);
func2(5, 10);
func2(undefined, 5);
var employee = {
    id: 25,
    greet: function () {
        var self = this;
        setTimeout(function () { console.log(self.id + " this < scope"); }, 1000);
    }
};
employee.greet();
var employee2 = {
    id: 25,
    greet: function () {
        setTimeout(() => { console.log(this.id + " this < scope"); }, 1000);
    }
};
employee2.greet();
let Arr = ["sudeep", "gujju"];
let [firstname, surname, gender = "Male"] = Arr;
console.log(firstname);
console.log(surname);
let Obj = {
    Model: "Inspiron 3567",
    "Year": 2018,
    "Company": "Dell",
};
let { Model, Company, Year } = Obj;
console.log(Model, Company, Year);
let { Model: M, Company: C } = Obj;
console.log(M, C);
var FName = "Sudeep";
var LName = "Deepu";
var vObj = {
    FName,
    LName
};
console.log(vObj.FName, vObj.LName);
function createPerson(age, firstname, lastname) {
    var fullname = firstname + " " + lastname;
    return {
        firstname,
        lastname,
        fullname,
        IsSenior() {
            return age >= 60;
        }
    };
}
console.log(createPerson(60, Arr[0], Arr[1]).IsSenior() + " < ");
let Rest = function (message, ...rest) {
    console.log(message);
    console.log(rest);
    console.log(arguments);
};
Rest("REST OPERATOR", "red", "blue");
Rest("REST OPERATOR", "red", "blue", "green");
var spread = ["one", "two", "three"];
Rest("Spread Operator", ...spread);
console.log(`Good bye ${FName}`);
var string = `This is first line
    This is second Line
        This is third Line
`;
console.log(string);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["yellow"] = 3] = "yellow";
})(Color || (Color = {}));
;
console.log(Color.red);
console.log(Color.green);
console.log(Color.blue);
console.log(Color.yellow);
var fruits;
(function (fruits) {
    fruits[fruits["banana"] = 10] = "banana";
    fruits[fruits["papaya"] = 250] = "papaya";
    fruits[fruits["mango"] = 30] = "mango";
    fruits[fruits["apple"] = 31] = "apple";
})(fruits || (fruits = {}));
;
console.log(fruits.banana);
console.log(fruits.papaya);
console.log(fruits.mango);
console.log(fruits.apple);
let msg;
msg = 10;
let endWith = msg.endsWith("y");
console.log(endWith);
//# sourceMappingURL=demo.js.map