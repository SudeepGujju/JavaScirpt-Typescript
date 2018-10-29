
/* Symbol value represents a unique identifier*/

let s1 = Symbol();
let s2 = Symbol();

console.log(" Symbols comparision -> ", s1 == s2);//false
alert(" Symbols comparision -> "+ (s1 == s2) );//false

console.log(s1);
//alert(s1);//TypeError: cannot convert Symbol value to a string

console.log(s1.toString());
alert(s1.toString());

var SNO = Symbol("SNO");
var z = Symbol(0);
let SpecsObj = {
    [SNO] : "1", // not just "SNO" : "1"
    "Name" : "Sudeep",
    Age : "19",
    Sex : "Male",
    0 : "test",
    [z] : "test2"
}

//console.log(SpecsObj[SNO]); //We can acces the data using the symbol as the keys 

/* Symbols are skipped in for-in */
for(let i in SpecsObj)
{
    console.log("key -> " + i + ", Value -> " + SpecsObj[i] );
}

// both access the same property (the number 0 is converted to string "0")
console.log(SpecsObj[0]);
console.log(SpecsObj["0"]);

//console.log(SpecsObj[z]);

var CloneSpecsObj = Object.assign({},SpecsObj);//This copies SpecsObj including symbols and returns a new Object.

/* Gloabl Registry */
var ID = Symbol.for("ID");//Returns the symbol if already exist in the global registry else creates new symbol and returns it.
console.log(Symbol.for("ID"));//Returns the existing symbol.

var Name = Symbol.for("NAME");
console.log(Symbol.keyFor(Name));// Returns a symbol name if exist in global registry else undefined.

console.log(Reflect.ownKeys(SpecsObj));
console.log(Object.keys(SpecsObj));
console.log(SpecsObj);

let Calculator = {

    a:0,
    b:0,
    read(){
        this.a = Number(prompt("Enter a Number"));
        this.b = Number(prompt("Enter a Number"));
    
    },
    sum(){
        alert(this.a+this.b);
    },
    diff(){
        alert(this.a-this.b);
    },
    mul(){
        alert(this.a*this.b);
    },
};

Calculator.read();
Calculator.sum();
Calculator.diff();
Calculator.mul();

let Ladder = {
    step : 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        alert(this.step);
        return this;
    }
};

Ladder.up().up().down().showStep();

/*
    Following are the Primitive conversion 

    To do the conversion, JavaScript tries to find and call three object methods:

    (1) -> Object.[Symbol.toPrimitive]()
    (2) -> Object.toString() -> Object.valueOf()
    (3) -> Object.valueOf()  -> Object.toString()

    Returns if @param == string else @param == number/default 
*/
let person = {

    name:"Sudeepasmith8",
    age:"19",
    [Symbol.toPrimitive](hint:any){

        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.age;
    },

    /*
        if [Symbol.toPrimitive]() not exist toString is called for string
        if toString not exist valueOf is called
    */
    toString(){

    },

    /*
        if [Symbol.toPrimitive]() not exist valueOf is called for number/default
        if valueOf not exist toString is called
    */
    valueOf(){

    }

};

//Conversion Sample
alert(person);// hint: string -> {name: "Sudeepasmith8"}
alert(+person);// hint: number -> 19
//alert( (person) + 100 );// hint: default -> 100 //error typescript