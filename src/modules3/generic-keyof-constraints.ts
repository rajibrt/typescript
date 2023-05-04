type PersonType = {
    name: string;
    age: number;
    address: string;
};

type newType = "name" | "age" | "address"; //manually added

type newTypeUsingKeyOff = keyof PersonType

// const a: newType = 'age';
// const b: newTypeUsingKeyOff = 'address'

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key];
}

const property = getProperty({ name: "Mr. X", age: 100 }, 'name');

// ({name: 'Mr. X', age: 10}, 'age') //100

