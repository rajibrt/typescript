// // a type dependent on another type
// type a1 = null;
// type a2 = a1 extends string ? string : null;
// type a3 = undefined;
// type a4 = number;

// // nested conditional type
// type d = a1 extends null
//     ? null
//     : a3 extends number
//     ? number
//     : a4 extends null
//     ? null
//     : never;

// type Sheikh = {
//     wife1: string;
//     wife2: string;
// }

// type A = keyof Sheikh; // "wife1"| "wire2"

// // Check korbay  ei Sheikh Type a wife1 ase kina ? true: false

// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

// type CheckWife2 = CheckProperty<Sheikh, 'wife2'>;

// // Another example to remove a specific property
// type Friends = 'Asif' | 'Ziko' | 'Kamol'
// type RemovedFriend<T, K> = T extends K ? never : T
// type CurrentFriend = RemovedFriend<Friends, 'Asif'>
