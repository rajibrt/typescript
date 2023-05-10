"use strict";
// ternary operator
var _a;
const age = 25;
// if (age >= 18) {
//     console.log("Yes")
// }
// else {
//     console.log("No")
// }
const isAdult = age >= 18 ? "Yes" : "No";
// console.log(isAdult)
// Nullish coalescing operator
// Nullish coalescing work only with Null and undefined
const isAuthenticatedUser = '';
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName }, { userName2 });
const manush1 = {
    name: 'Manush',
    age: 100,
    address: {
        city: "No City",
        road: "No Road",
    }
};
const home = (_a = manush1.address.home) !== null && _a !== void 0 ? _a : "No Home";
console.log(home);
