
const year = document.getElementById("year")!
const thisYear = (new Date().getFullYear() as unknown) as string
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

// Tr's solution
// const year = document.getElementById("year")!
// const thisYear: string = new Date().getFullYear().toString()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
