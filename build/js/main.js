"use strict";
let shotguns = ["Pump", "Auto shotgun", "Combat", "Tactical"];
let digit = [2, 3, 7, 11, 21, 5492, 829, 102];
let address = [204, "Marley Drive"]; // Union types
let signal = [1, "On", true]; // also a union type
//Tuples -arrays with definite length and definite data types
let myTuple;
myTuple = ["hey", 56, false];
let mixed = ["hey", 56, false];
// mixed = myTuple - works
// myTuple = mixed - does not work
// Objects
let player;
let gamer = {};
player = gamer; // --true
// In type, you should use an equals sign(=) while in interface, you do not use it.
// enum - a methos that enumerates values in it
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
const greetLawyer = (lawyer) => {
    if (lawyer.name) {
        return `Hello ${lawyer.name.toUpperCase()}!`;
    }
    return "Hello!";
};
let KK = {
    name: "Mbiki Kamanjiri",
    active: true,
    casesDone: 70
};
console.log(greetLawyer(KK));
