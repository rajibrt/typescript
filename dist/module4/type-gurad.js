"use strict";
// // keyof guard
// type Alphaneumeric = string | number
// function add(param1: Alphaneumeric, param2: Alphaneumeric) {
//     if (typeof param1 === 'number' && typeof param2 === 'number') {
//         return param1 + param2;
//     } else {
//         return param1.toString() + param2.toString();
//     }
// }
// add('1', '2')
// add(1, 2)
// // in guard
// type NormalUserType = {
//     name: string;
// }
// type AdminUserType = {
//     name: string;
//     role: 'admin';
// }
// function getUser(user: NormalUserType | AdminUserType) {
//     if ('role' in user) {
//         return `I am a ${user.role} user`;
//     }
//     else {
//         return `I am a normal suer`
//     }
// }
// const normalUser1: NormalUserType = { name: 'Motu' };
// const AdminUser1: AdminUserType = { name: 'Patlu', role: 'admin' };
// console.log(getUser(normalUser1));
// console.log(getUser(AdminUser1))
// // instanceof guard
// class Animal {
//     name: string;
//     species: string;
//     constructor(name: string, species: string) {
//         this.name = name;
//         this.species = species;
//     }
//     makeSound() {
//         console.log('I am making sound')
//     }
// }
// class Dog extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeBark() {
//         console.log('I am barking')
//     }
// }
// class Cat extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeMew() {
//         console.log('I am  Mewing')
//     }
// }
// function isDog(animal: Animal): animal is Dog {
//     return animal instanceof Dog;
// }
// function isCat(animal: Animal): animal is Cat {
//     return animal instanceof Cat;
// }
// function getAnimal(animal: Animal) {
//     if (isDog(animal)) {
//         animal.makeBark();
//     }
//     else if (isCat(animal)) {
//         animal.makeMew();
//     }
//     else {
//         animal.makeSound();
//     }
// }
// const animal1 = new Dog('German Bhai', 'Dog'); // instance -> Dog
// const animal2 = new Cat('Parsian Bhai', 'Cat'); // instance -> Cat
// getAnimal(animal2);
