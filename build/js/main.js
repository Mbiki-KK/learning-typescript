"use strict";
// type One = string
// type Two = string | number
// type Three = "Hello"
// let a:One = "Hello"
// let b = a as Two
// const isNumber = (value: any): boolean => {
//     return typeof value === 'number' ? true : false
// }
// console.log(isNumber(67))
const isAsc = (...arr) => {
    for (let i = 0; i < arr.length - 1; i++) // loops through each element of the array
     {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
        // checks if the current element of the array is greater than the next element and returns false if the condition is satisfied
    }
    return true;
};
console.log(isAsc(1, 2, 3));
