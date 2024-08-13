
type One = string
type Two = string | number
type Three = 'Hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific type
let c = a as Three // more specific

let d = <One>'World' // angle brackets '<>' don't work with react


const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b
    } return '' + a + b
}

//
let myVal: string = addOrConcat(2, 2, 'add') as string


// forced casting
// 10 as string  won't work since it checks some of these errors when it can

(10 as unknown) as string




// The DOM - Document Object Model
const img = document.querySelector('img')! // - non-null assertion
const myImg = document.getElementById('#img') as HTMLImageElement

img.src
myImg.src

