class Coder {

    constructor(
        public readonly name: string,
        public music:string,
        private age: number,
        protected lang: string = 'Typescript') {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge () {
        return `Hello, I'm ${this.age}`
    }
}

const Mbiki = new Coder('Mbiki','Pop', 19,)
console.log(Mbiki.getAge())
// console.log(Mbiki.age)
// console.log(Mbiki.lang)



// Data modifiers/ Visibility modifiers/members
// public
// private - strictly for use in the class defined and nowhere else
// protected - can be accessed in subclasses. (Property 'lang' is protected and only accessible within class 'Coder' and its subclasses)

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age:number,
     ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev("Hp", 'Sara', 'Hip hop', 23)
console.log(Sara.getLang())

//////////////////////////////////////////////////////////////////

interface Musician {
    name: string
    instrument: string
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Paige = new Guitarist('Jimmy', 'guitar')
console.log(Paige.play('strums'))

/////////////////////////////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count // ++ is in front to ensure the first id is 1 not 0
    }
}

const John = new Peeps("John")
const Steve = new Peeps("Steve")
const Amy = new Peeps("Amy")

console.log(John.id)
console.log(Amy.id)
console.log(Steve.id)
console.log(Peeps.count)

//////////////////////////////////////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string'))
            {
                this.dataState = value
                return // setters do not have return values
        } else throw new Error("Params is not an array of strings")
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)
// MyBands.data = ["Van Halen", 5150] -- doesn't work
