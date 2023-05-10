"use strict";
const addMeInMyCrushMind = (myInfo) => {
    const crush = "Kate Winslet";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "Persian",
    age: 100,
    salary: 10000000,
    other1: false,
    other2: null,
};
const result4 = addMeInMyCrushMind(myInfo);
