"use strict";
const orderedCount = (text) => {
    return Array.from(new Set(text)).map(c => { var _a; return [c, (_a = text.match(new RegExp(c, 'g'))) === null || _a === void 0 ? void 0 : _a.length]; });
};
console.log(orderedCount("Hello"));
