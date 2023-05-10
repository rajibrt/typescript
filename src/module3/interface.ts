// type User = {
//     name: string;
//     age: number;
// }

// type extendedUser = User & {
//     role: string;
// }

// interface IUser {
//     name: string;
//     age: number;
// }

// interface IExtendedUser extends IUser {
//     role: string;
// }

// // interface can be use on Object, Function, Array
// type addNumbersType = (num1: number, num2: number) => number;
// interface IAddNumbers {
//     (num1: number, num2: number): number;
// }

// type rollNumbersType = number[];
// interface IRollNumbers {
//     [index: number]: number;
// }
// const IAddNumbers: IRollNumbers = [1, 2, 3, 4]; //[index]

// const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;


// const user: extendedUser = {
//     name: 'Manush',
//     age: 120,
//     role: 'unknown',
// }

// const userWithTypeAlias: User = {
//     name: 'Type Aliases',
//     age: 100
// }

// const userWithInterface: IUser = {
//     name: 'Interface',
//     age: 200
// }