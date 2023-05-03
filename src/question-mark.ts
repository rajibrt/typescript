// ternary operator

const age: number = 25;

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
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName }, { userName2 })

// Nullish coalescing with optional chaining

type Manush = {
    name: string;
    age: number;
    address: {
        city: 'No City',
        road: 'No Road',
        home?: ""

    }
}

const manush1: Manush = {
    name: 'Manush',
    age: 100,
    address: {
        city: "No City",
        road: "No Road",

    }
}
const home = manush1.address.home ?? "No Home";
console.log(home)