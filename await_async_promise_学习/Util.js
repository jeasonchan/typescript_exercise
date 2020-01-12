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
exports.hahahhaahha = 111;
exports.url = "https://cn.bing.com/search?q=%E5%93%88%E5%93%88&go=%E6%8F%90%E4%BA%A4&qs=ds&form=QBLHCN";
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
//async 修饰的函数的返回值，如果自己显式声明了，则必须是Promise类型，
//如果不显示声明，则自动将return的值包装为Promise1的泛型
function jie_cheng(endNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = 1;
        let flag = 1;
        while (flag <= endNumber) {
            result = result * flag++; //先使用，再自增
        }
        return result;
    });
}
exports.jie_cheng = jie_cheng;
