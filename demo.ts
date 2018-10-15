/*
    Following code was written in ES6/ECMA2015
*/

//
/* Hoisting */
function fnHoistingVar(input:string){

    if(input === 'a')
        greet = 'Hoisting if';
    else
        greet = "Hoisting else";

    console.log(greet);

    var greet="";
}
fnHoistingVar("a");

function fnHoistingLet(input:string)
{
    let greet;

    if(input === 'a')
    {
        greet = 'block scope let if';
    }
    else
    {
        greet = "block scope let else";
    }
    console.log(greet);
}
fnHoistingLet("a");

var a = 1,b = 2;
if(a === 1)
{
    var a = 10;
    let b = 20;
    console.log(a,b); /*Output - 10,20*/
}
console.log(a,b); /*Output - 10,2*/
//

//
/*
    const Keyword
*/
const num = 10;/*num = 5; - Gives error*/
const ConstObj = { key : "one" }/* ConstObj = { key : "two"} - Gives error */

    console.log(ConstObj.key);
        ConstObj.key = "two";
    console.log(ConstObj.key);
//

/* var in loop */
for(var i = 0; i < 5;i++)
{
    setTimeout(function(){console.log(i)},1000);
}// o/p -> 5,5,5,5,5

/* let in loop */
for(let i = 0;i<5;i++)
{
    setTimeout(function(){console.log(i)},1000);
}// o/p -> 1,2,3,4,5

/*
    Arrow Functions
    (param1,param2) -> @param

    () => {} -> function(){}
    () - not required if only single param
    {} - not required if only single statement exists inside block
    @param=defValue - defValue will be assinged to the variable if no param passed
    @param1,@param2=(@param1/variable/function) - preceeding parameter/variable/function return value, can be used to assign default value.

    @param1 => retValue -> function(@param1){ return value; }

    @param1=defValue => console.log(@param1);

   (@param1=defValue, @param2=@param1) => console.log(@param1);
*/

const func = () => {
    return 20;
};

const func1 = (value:number) => 20*value;/* no need to mention 'return' if only return statement used*/

console.log(func1(10));

const func2 = (param1=10,param2=20,param3=func1(10)) =>
{
    console.log(10*param1+param2+param3 +"param");
}

func2();
func2(5);
func2(5,10);
func2(undefined,5);

//
/*
    lexical this
*/
var employee = {
    id:25,
    greet:function(){
        var self = this;
        setTimeout(function(){console.log(self.id + " this < scope" );},1000);
    }
};
employee.greet();

var employee2 = {
    id:25,
    greet:function(){
        setTimeout(() => {console.log(this.id + " this < scope" );},1000);
    }
};
employee2.greet();

//
/* Destructing an Array */
let Arr = ["sudeep","gujju"];

let [firstname,surname,gender="Male"] = Arr;

console.log(firstname);
console.log(surname);
//

//
/* Destructing an Object */
let Obj = {
    Model : "Inspiron 3567",
    "Year" : 2018,
    "Company" : "Dell",
};

/* {Name1 : alias1, Name2 : alias2} Names must be same key and can only be accessed through alias if specified*/
let {Model, Company, Year} = Obj;
console.log(Model,Company, Year);
let {Model:M, Company:C} = Obj;
console.log(M,C);
//

//
/*
    Objects

    if key and name of the variable then we need only to define key

    var FName = "value1";
    var LName = "value2";
    var vObj = {
        FName: FName,
        LName: LName
    };

    instead we can do as below

    var FName = "value1";
    var LName = "value2";
    var vObj = {
        FName,
        LName
    };

*/
var FName = "Sudeep";
var LName = "Deepu";

var vObj = {
    FName,
    LName
};

console.log(vObj.FName, vObj.LName);

function createPerson(age:number,firstname:string,lastname:string)
{
    var fullname = firstname + " " + lastname ;
    return{
        firstname,
        lastname,
        fullname,
        /*IsSenior:function()
        {
            return age >= 60;
        }*/
        IsSenior()
        {
            return age >= 60;
        }
    };
}


console.log(createPerson(60,Arr[0],Arr[1]).IsSenior() + " < ");
//
/*
    Rest Operator

    Receives arguments in an Array similar to VArgs in JAVA
    
    (...rest) => {console.log(rest);}

    arguments.length = no.of Args Passed;
*/
let Rest = function(message:string,...rest:any[]){

    console.log(message);

    console.log(rest);

    console.log(arguments);
}

Rest("REST OPERATOR","red","blue");
Rest("REST OPERATOR","red","blue","green");

//
/* 
    Spread Operator

    Sends array values as each Argument

    var spread = [1,2,3];
    func(..spread);

    arguments.length = 3;
*/

var spread = ["one","two","three"];
Rest("Spread Operator",...spread);

console.log(`Good bye ${FName}`);

var string = `This is first line
    This is second Line
        This is third Line
`;
console.log(string);

//
/*  
    Enums

    Default Values are index values
*/
enum Color {red, green, blue, yellow};
console.log(Color.red);
console.log(Color.green);
console.log(Color.blue);
console.log(Color.yellow);

enum fruits {banana = 10, papaya = 250, mango = 30, apple};
console.log(fruits.banana);
console.log(fruits.papaya);
console.log(fruits.mango);
console.log(fruits.apple);

/*
    Assertion
*/
//let variable;
//let msg:string = "sun";
let msg:any;
msg = 10;
let endWith = msg.endsWith("y");
console.log(endWith);