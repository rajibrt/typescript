"use strict";
// // normal function
// // default parameter
// // function add(num1: number, num2: number): number {
// //     return num1 + num2
// // }
// function add(num1: number, num2: number = 10): number {
//     return num1 + num2
// }
// add(20, 50)
// // ********************************
// // spread operator
// const myFriends = ['Kamol', 'Ashik', 'Babu']
// const newFriends = ['Kamal', 'Sohel']
// myFriends.push(...newFriends)
// console.log(myFriends)
// // ********************************
// // rest parameters
// const greetFriend = (...friends: string[]): void => friends.forEach((friend) => console.log(`Hi, ${friend}`));
// greetFriend('Asif', 'Chandon', 'Jiko', 'Sohel', 'Mishu', 'Joti')
// // ********************************
// // array and object destructuring
// const myBestFriend = {
//     fullName: 'Abul Bashar',
//     age: 24
// }
// const [bestFriend] = myFriends;
// const { fullName: myFullName } = myBestFriend;
// console.log(myFullName)
// // fat arrow function
// const addArrow = (num1: number, num2: number): number => num1 + num2;
// // number array function
// const arr = [1, 2, 3, 4, 5];
// const newArray = arr.map((elem: number) => elem * elem);
// // function on object
// // const person = {
// //     name: "kayum",
// //     balance: 5,
// //     addBalance(money: number) {
// //         return this.balance + money;
// //     }
// // }
// // const person: {
// //     name: string;
// //     balance: number;
// //     addBalance(money: number): number;
// // } = {
// //     name: "kayum",
// //     balance: 5,
// //     addBalance(money: number) {
// //         return this.balance + money;
// //     }
// // }
// // const person: {
// //     name: string;
// //     balance: number;
// //     addBalance(money: number): string;
// // } = {
// //     name: "kayum",
// //     balance: 5,
// //     addBalance(money: number) {
// //         return `My new balance ${this.balance + money}`;
// //     }
// // }
// const person: {
//     name: string;
//     balance: number;
//     addBalance(money: number): void;
// } = {
//     name: "kayum",
//     balance: 5,
//     addBalance(money: number) {
//         console.log(`My new balance ${this.balance + money}`);
//     }
// }
