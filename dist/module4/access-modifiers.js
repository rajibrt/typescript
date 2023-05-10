"use strict";
// class BankAccount {
//     public readonly id: number;
//     public name: string;
//     //public private _balance: number; // private ব‍্যাবহার করলে class এর বাইরে থেকে modify করা যাবেনা
//     protected _balance: number;
//     // Note: Normally we will use private & readonly properties not public properties
//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }
//     getBalance() {
//         console.log(`My current balance: ${this._balance}`)
//     }
//     addDeposit(amount: number) {
//         this._balance = this._balance + amount;
//     }
// }
// class StudentAccount extends BankAccount {
//     test() {
//         this._balance
//     }
// }
// const myAccount = new BankAccount(444, 'Kayum', 20)
// //myAccount.balance = 0; // this will be not work for as assign as private
// console.log(myAccount)
