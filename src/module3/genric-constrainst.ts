// const newData ={...myInfo, crush};
type MandatoryType = { name: string, age: number, salary: number }
interface MandatoryInterface { name: string, age: number, salary: number }

const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
    const crush = "Kate Winslet";
    const newData = { ...myInfo, crush };
    return newData;
}

type MyInFoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null;
}

const myInfo = {
    name: "Persian",
    age: 100,
    salary: 10000000,
    other1: false,
    other2: null,
}

const result4 = addMeInMyCrushMind(myInfo);
result4.