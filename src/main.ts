let shotguns = ["Pump", "Auto shotgun", "Combat", "Tactical"]

let digit = [2, 3, 7, 11, 21, 5492, 829, 102]

let address = [204, "Marley Drive"] // Union types

let signal = [1, "On", true] // also a union type


//Tuples -arrays with definite length and definite data types
let myTuple: [string, number, boolean]

myTuple = ["hey", 56, false]

let mixed = ["hey", 56, false]
// mixed = myTuple - works
// myTuple = mixed - does not work

// Objects

let player: object

let gamer = {}

player = gamer // --true

// Type vs Interface
type Guitarist = {
    name: string,
    active: boolean,
    albums: (string | number)[]
}

interface Lawyer {
    name?: string,
    active: (boolean | string),
    casesDone: number
}

// In type, you should use an equals sign(=) while in interface, you do not use it.


// enum - a methos that enumerates values in it
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}
console.log(Grade.A)


const greetLawyer = (lawyer: Lawyer) => {
    if (lawyer.name) {
        return `Hello ${lawyer.name.toUpperCase()}!`
    }
    return "Hello!"
}

let KK: Lawyer = {
    name: "Mbiki Kamanjiri",
    active: true,
    casesDone: 70
}

console.log(greetLawyer(KK))
