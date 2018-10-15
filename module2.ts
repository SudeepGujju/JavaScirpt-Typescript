
console.log("2");

export class Square
{
    private length:number;
    private breadth:number;

    constructor(length:number,breadth:number)
    {
        this.length = length;
        this.breadth = breadth;
    }

    /*Length*/
    setLength(length:number) {
        this.length = length;
        return void 0;
    }

    getLength() {
        return this.length;
    }

    // Below syntax helps us to access or modify properties same as
    // set - Square.Breadth = value insteadOf Square.setBreadth(value)
    // get - Square.Breadth insteadOf Square.getBreadth()
    // The only difference is the syntax and access

    /*Breadth*/
    set Breadth(breadth:number)
    {
        this.breadth = breadth;
    }

    get Breadth()
    {
        return this.breadth;
    }

    area()
    {
        return this.length*this.breadth;
    }
}

export class cube
{   
    /*
    private length:number;
    private breadth:number;
    private height:number;

    constructor(length:number, breadth:number, height:number)
    {
        this.length = length;
        this.breadth = breadth;
        this.height  = heigth;
    }*/

    /*
    ** Above commented code can be replaced with below line of code
    */
    constructor(private length:number, private breadth:number, private height:number)
    {
        //
        // If the Access Modifier was specified in the constructor
        // Then there is no need of declaring the properties seperatly and 
        // Assigning values to the declared fields
        //
    }

    /*Length*/
    setLength(length:number) {
        this.length = length;
        return void 0;
    }

    getLength() {
        return this.length;
    }

    // Below syntax helps us to access or modify properties same as
    // set - Box.Breadth = value insteadOf Box.setBreadth(value)
    // get - Box.Breadth insteadOf Box.getBreadth()
    // The only difference is the syntax and access

    /*Breadth*/
    set Breadth(breadth:number)
    {
        this.breadth = breadth;
    }

    get Breadth()
    {
        return this.breadth;
    }

    volume()
    {
        return this.length*this.breadth;
    }
}

export class OptinalConstructor
{
    // '? - operator' use it for optional parameter
    constructor(private x:number, private y:number, private z?:number)
    {

    }
}