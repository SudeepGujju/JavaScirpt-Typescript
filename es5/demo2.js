"use strict";
let symb = Symbol("ID");
Symbol();
console.dir(symb);
let SpecsObj = {
    [symb]: "1"
};
for (let i in SpecsObj) {
    console.log(i);
}
//# sourceMappingURL=demo2.js.map