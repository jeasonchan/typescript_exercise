import * as Util from "./Util"

// Util.asyncPrint(1000);
// console.log(Util.hahahhaahha);

console.log(Util.jie_cheng(100).then(result => {
    console.log(result);
}));

console.log("line 6");


//async 定义的方法本身就是异步，如果其内部再调用异步方法，就显然没有必要了
//因此，为了使异步方法同步执行，就产生了await关键字