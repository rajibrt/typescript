"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import{add as addTwo, subtract,multiply} from "./module"
// import * as Methods from "./module";
// import average,{add as addTwo, multiply, subtract} from "./module";
const module_1 = __importDefault(require("./module"));
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const res = module_1.default.average(4, 6);
