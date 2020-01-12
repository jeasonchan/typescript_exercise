"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Util = __importStar(require("./Util"));
// Util.asyncPrint(1000);
// console.log(Util.hahahhaahha);
console.log(Util.jie_cheng(100).then(result => {
    console.log(result);
}));
console.log("line 6");
