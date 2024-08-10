// Type Aliases
type booleanOrString = (boolean | string)

type Lawyer = {
    name?: string,
    active: booleanOrString ,
    casesDone: number
}

// Literal Types
let username: "Granslik"

// username = Miquella -- doesn't work



// functions
const add = (a: number,b: number): number => {
    return a+b
}

const logMessage = (messange:any): void => {
    console.log(messange)
}
logMessage("Hello there")
logMessage(add(2,3))
logMessage("Hello there")

type mathFunction = (a:number, b:number) => number

// interface mathFunction {(a: number, b:number): number}

// For sake of habit, use type for type literals and interface for class definition


let subtract: mathFunction = function (c,d) {
    return c-d
}
logMessage(subtract(2,3))

let multiply: mathFunction = function (f,g) {
    return f * g
}

logMessage(multiply(4,6))

// Optional parameters

const addAll = (a: number, b:number, c?:number): number => {
    // typeguard - avoids error of possibly undefined
    if (typeof c !== 'undefined') {
        return a+b+c
    }
    return a+b
}
// default param value
const sumAll = (a: number, b:number, c:number = 2): number => {

    return a+b+c
}


logMessage(addAll(2,3,4))
logMessage(addAll(2,3))
logMessage(sumAll(2,3))

// Rest parameters

const total = (...nums: number[]):number => {
    return nums.reduce((prev, curr) => prev + curr)
}

logMessage(total(1,2,3,4))

const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

