/////// Utility Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate:Partial<Assignment>):Assignment =>{
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: 'J67/8385/2023',
    title: 'Final project',
    grade: 0
}

console.log(updateAssignment(assign1, {grade: 95}))
const assignGraded = updateAssignment(assign1, {grade: 95})

// required & readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database

    return assign
}

const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true}

// assignVerified.grade = 88

recordAssignment({...assignGraded, verified: true})

// Record
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrade:Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "C"
}


interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2: 95},
    Kelly: {assign1:74, assign2: 63},
}


// Pick & Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">
const score: AssignResult = {
    studentId: "k123",
    grade: 85
}

type AssignPreview = Omit<Assignment, "grade" | "verified">
const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project",
    // grade: 67
}

// Exclude & Extract


type AdjustedGrade = Exclude<LetterGrades, "U">
type HighGrades = Extract<LetterGrades, "A" | "B">

// NonNullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// Return type
// type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility TYpes", 100)

console.log(tsAssign)
// N/B: Type aliases are written in PascalCase for readability purposes


// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArg: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArg)

console.log(tsAssign2)


// Awaited - helps us with the return type of a promise
// syntax is as follows
interface User {
    id: number,
    name: string,
    username: string,
    email: string
}


const fetchUsers = async(): Promise<User[]> => {
    const data = await fetch(
    'https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json()}).catch(err => {
            if (err instanceof Error) console.log(err.message)
        })

        return data
}


type FetcUser = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))

