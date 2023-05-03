type CrashType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
};

const crash1: CrashType = {
    name: 'Moina Pakhi',
    age: 22,
    profession: 'Web Development',
    address: 'India'
};
const crash2: CrashType = {
    name: 'Tia Pakhi',
    age: 25,
    profession: 'Next Level Web Development',
    address: 'Dhaka'
};

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;
const courseName: CourseNameType = 'Next level Web Development';

// ****************************************************************
type OperationType = (x: number, y: number) => number;

const calculate = (number1: number, number2: number, operation: OperationType) => {
    return number1 + number2;
}

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);