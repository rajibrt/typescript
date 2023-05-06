// // Arrow Functions
// const createArray = (param: string): string[] => {
//     return [param];
// }
// // const createArray1 = <T>(param: T): T[] => {
// //     return [param];
// // }

// // Arrow function
// const createArray1 = <X, Y>(param1: X, params2: Y): [X, Y] => {
//     return [param1, params2];
// }

// // normal function
// function createArray2<X, Y>(param1: X, params2: Y): [X, Y] {
//     return [param1, params2];
// }

// const result1 = createArray1<string, string>("Bangladesh", "I love my country");
// const result2 = createArray1<boolean, Array<string>>(false, ["USA"]);

// type Name = { name: string }
// const result3 = createArray1<Name, boolean>({ name: "Bangladesh" }, false);


// // Spread Operator
// // const newData ={...myInfo, crush};
// const addMeInMyCrushMind = <T>(myInfo: T) => {
//     const crush = "Kate Winslet";
//     const newData = { ...myInfo, crush };
//     return newData;
// }

// const myInfo = {
//     name: "Persian",
//     age: 100,
//     salary: 10000000,
// }

// const result4 = addMeInMyCrushMind(myInfo);
// result4