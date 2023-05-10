"use strict";
const crash1 = {
    name: 'Moina Pakhi',
    age: 22,
    profession: 'Web Development',
    address: 'India'
};
const crash2 = {
    name: 'Tia Pakhi',
    age: 25,
    profession: 'Next Level Web Development',
    address: 'Dhaka'
};
const isCrushMarried = false;
const courseName = 'Next level Web Development';
const calculate = (number1, number2, operation) => {
    return number1 + number2;
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
