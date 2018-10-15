console.log("1");

import {Square} from "./module2";

console.log("3");
/*
    Interface
*/
interface CompletePerson
{
    fName:string;
    lName:string;
    age:number;
}

/*
**  When declaring an object of particular type(interface) then all properties(variable) are mandatory.
*/
let completePerson : CompletePerson = {
    fName:"sudeep",
    lName:"deepu",
    age:10
};

/*
**  When declaring an object of particular type(interface) 
**  If all of those properties(variable) are not mandatory then use '? - operator' for optional.
*/
export interface Person
{
    fName:string;
    lName:string;
    age?:number;
}

let partialPerson : Person = {
    fName:"sudeep",
    lName:"deepu"
};

/*
**  Class - see declaration in module2.ts
*/
let square = new Square(5,10);

/*
** see declaration of get and set
*/
console.log(square.getLength());
square.setLength(15);

/*
** see declaration of get and set
*/
console.log(square.Breadth);
square.Breadth = 25;