"use strict";
// const arrayOfNumbers = [1, 2, 3, 4, 5]
// //converting to string['1','2','3','4]
// const arrayOfString = arrayOfNumbers.map((number) => number.toString());
// console.log(arrayOfString)
// // map on type
// type AreaNumber = {
//     height: number;
//     width: number;
// }
// type AreaString = {
//     height: string;
//     width: string;
// }
// type AreaReadOnly = {
//     readonly height: number;
//     readonly width: number;
// }
// const rectangularArea: AreaReadOnly = {
//     height: 10,
//     width: 10
// }
// rectangularArea.width = 10 // error for type is read only on line number 17, 18
// type A = AreaNumber['height'] // lookup types
// type B = keyof AreaNumber; // 'width' | 'height'
// ****************************************************************
const arrayOfNumbers = [1, 2, 3, 4, 5];
//converting to string['1','2','3','4]
const arrayOfString = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfString);
const area1 = { height: 10, width: '10' };
const rectangularArea = {
    height: 10,
    width: 10
};
rectangularArea.width = 10; // error for type is read only on line number 17, 18
