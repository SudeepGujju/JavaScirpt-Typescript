"use strict";

/* Continution of demo2.ts*/

/* Constructor functions */
function User(name){

    //this = {}; //implicity
    this.name = name;
    this.isAdmin = false;

    //return this; //implicity
}

let userAlpha = new User("alpha");
console.log(userAlpha.name);
let userBeta = new User("beta");
console.log(userBeta.name);

function Car(Company){

    new.target;//undefined if the function is not called with new keyWord else func

    /* create new Object if not called with new keyWord */
    if(!new.target)
        return (new Car(Company));
    
    this.Company = Company;
}

let car = Car("AUDI");//Here new keyWord is not used.

function Student(){

    this.name = "";
    this.dob = "";
    this.gender = "";
}

/* below syntaxes are same */
let student = new Student();
let student2 = new Student; //-> no parentheses-() - we can omit if func has no arguemnts


// But if there is a return statement, then the rule is simple:
// If return is called with object, then it is returned instead of this.
function BigAnimal(){

    this.name = "Elepahant";
    return { name : "John" };//returns an Object;
}
alert( new BigAnimal().name );//John

// If return is called with a primitive, it’s ignored.
function SmallAnimal(){

    this.name = "Rabbit";

    // returns this;
   /*  return;
    return 0;
    return "";
    return null;
    return undefined;
    return true; */
}
alert( new SmallAnimal().name );//Rabbit

function Calculator2(){

    this.read = function(){
        this.a = prompt("Enter First Number",0);
        this.b = prompt("Enter Second Number",0);
    };

    this.sum = function(){
        return this.a+this.b;
    };

    this.diff = function(){
        return this.a-this.b;
    };

    this.mul = function(){
        return this.a*this.b;
    }

}

let cal = new Calculator2;
cal.read();
alert("Sum="+cal.sum());
alert("Diff="+cal.diff());
alert("Mul="+cal.mul());

function Accumulator(initial){
    this.value = initial;

    this.read = function(){
        this.value = this.value+prompt("How much to add?");
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();