const orderedCount = (text: string) => {
    return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g'))?.length])
}

console.log(orderedCount("Hello"))

// counts the number of occurences of each character and return it as a list of tuples in order of appearance.
// For empty output return an empty list
