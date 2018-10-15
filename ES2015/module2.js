"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("2");
class Square {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    setLength(length) {
        this.length = length;
        return void 0;
    }
    getLength() {
        return this.length;
    }
    set Breadth(breadth) {
        this.breadth = breadth;
    }
    get Breadth() {
        return this.breadth;
    }
    area() {
        return this.length * this.breadth;
    }
}
exports.Square = Square;
class cube {
    constructor(length, breadth, height) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
    setLength(length) {
        this.length = length;
        return void 0;
    }
    getLength() {
        return this.length;
    }
    set Breadth(breadth) {
        this.breadth = breadth;
    }
    get Breadth() {
        return this.breadth;
    }
    volume() {
        return this.length * this.breadth;
    }
}
exports.cube = cube;
class OptinalConstructor {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
exports.OptinalConstructor = OptinalConstructor;
//# sourceMappingURL=module2.js.map