////////// Generics

const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return(typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

// console.log(isObj({name: 'John'}))

const isTrue = <T> (arg: T): {arg: T, is: boolean} => {
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }

    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}

// console.log(isTrue(false))
// console.log(isTrue({}))
// console.log(isTrue({name: 'Mbiki'}))
// console.log(isTrue(0))
// console.log(isTrue(1))
// console.log(isTrue(''))
// console.log(isTrue('Mbiki'))
// console.log(isTrue(undefined))
// console.log(isTrue(-7))

interface BoolCheck<T> {
    value: T
    is: boolean
}

const checkBoolValue = <T> (arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return {value: arg, is: false}
    }

    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}
}

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    return user
}

console.log(processUser({id: 1, name: 'Mbiki'}))



const getUsersProp = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

class StateObj<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObj("John")

console.log(store.state)

store.state = "Mbiki"
// store.state = 12

const myState = new StateObj<(string|number|boolean)[]>([15])
myState.state = ['Mbiki', 12, true]
console.log(myState.state)
