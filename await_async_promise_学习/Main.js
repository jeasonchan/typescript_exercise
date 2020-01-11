"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = 111;
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, ms); //reject模拟出错，返回error
    });
}
function asyncPrint(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('start');
            yield timeout(ms); //这里返回了错误
            console.log('end'); //所以这句代码不会被执行了
        }
        catch (err) {
            console.log(err); //这里捕捉到错误error
        }
    });
}
exports.asyncPrint = asyncPrint;
// asyncPrint(1000);
