// import{add as addTwo, subtract,multiply} from "./module"
// import * as Methods from "./module";
// import average,{add as addTwo, multiply, subtract} from "./module";
// import Jekono from "./module"

// import addTwo from './utils/add'
// import average from './utils/average'
// import divide from './utils/divide'
// import multiply from './utils/divide'
// import substract from './utils/subtract'

import method from './utils/index'


const add=(param1: number,param2:number, param3:number):number=>{
    return param1+param2+param3;
}

const res= method.average(4,6)
const rea1 = method.addTwo(4,6);
const rea2=method.multiply(4,6);
const rea3 =method.average(4,6);