"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific type
let c = a; // more specific
let d = 'World'; // angle brackets '<>' don't work with react
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
//
let myVal = addOrConcat(2, 2, 'add');
// forced casting
// 10 as string  won't work since it checks some of these errors when it can
10;
// The DOM - Document Object Model
const img = document.querySelector('img'); // - non-null assertion
const myImg = document.getElementById('#img');
img.src;
myImg.src;
