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


console.clear();

/* Numbers are 64-bit in js*/

1e3 = 1 * 1000; // "e" multiplies the number by 1 with the given zeroes count.
1.23e6 = 1.23 * 1000000;

// -3 divides by 1 with 3 zeroes
1e-3 = 1 / 1000 ;//(=0.001)

// -6 divides by 1 with 6 zeroes
1.23e-6 = 1.23 / 1000000 ;//(=0.00000123)

//Case dont matter
console.log(0xff);//255
console.log(0xFF);//255

var num = 0b11111111;//binary form of 255
var num0 = 0o377;//octal form of 255
console.log( num == num0 );//true

var num1 = 1245;
var num2 = 10.5;

// num.toString(base) returns a string representation of num in the numeral system with the given base.
// Base number range 2 - 36.
// Otherwise it throws -> Uncaught RangeError: toString() radix argument must be between 2 and 36.
// Default base is 10 - Decimal.
console.log( "ToString Base 10 > "+ num1.toString() );
console.log( "ToString Base 2 > "+ num1.toString(2) );
console.log( "ToString Base 8 > "+ num1.toString(8) );
console.log( "ToString Base 16 > "+ num1.toString(16) );

console.log( "ToString Base 10 > "+ num2.toString() );
console.log( "ToString Base 2 > "+ num2.toString(2) );
console.log( "ToString Base 8 > "+ num2.toString(8) );
console.log( "ToString Base 16 > "+ num2.toString(16) );

/* We need to use 2 dots to call method directly on number or use brackets */
/* Reason: Javascript checks for decimal part after first dot. If we place one more dot javascript knows that decimal part is empty */
//console.log( 15.toString(2) );Error
console.log( 15..toString(2) );
console.log( (15).toString(2) );

/* To Get number representation use Number() or add+ sign before */
console.log( Number((15).toString(2)) );
console.log( +(15).toString(2) );

console.log(Math.round(3.1),Math.round(3.5));
console.log(Math.ceil(3.1),Math.ceil(3.5));
console.log(Math.floor(3.1),Math.floor(3.5));
console.log(Math.trunc(3.1),Math.trunc(3.5));//Math.trunc not supported in Internet Explorer.

console.log(Math.round(-3.1),Math.round(-3.5));
console.log(Math.ceil(-3.1),Math.ceil(-3.5));
console.log(Math.floor(-3.1),Math.floor(-3.5));
console.log(Math.trunc(-3.1),Math.trunc(-3.5));//Math.trunc not supported in Internet Explorer

// num.toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.
var num5 = 1234.5678;
console.log(num5.toFixed(0));
console.log(num5.toFixed(2));
console.log(num5.toFixed(5));