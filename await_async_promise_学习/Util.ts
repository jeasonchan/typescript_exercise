export let hahahhaahha: number = 111;

export let url: string = "https://cn.bing.com/search?q=%E5%93%88%E5%93%88&go=%E6%8F%90%E4%BA%A4&qs=ds&form=QBLHCN";


function timeout(ms: number) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject('error')
        }, ms);  //reject模拟出错，返回error

    });

}

export async function asyncPrint(ms: number) {

    try {

        console.log('start');

        await timeout(ms);  //这里返回了错误

        console.log('end');  //所以这句代码不会被执行了

    } catch (err) {

        console.log(err); //这里捕捉到错误error

    }

}

//async 修饰的函数的返回值，如果自己显式声明了，则必须是Promise类型，
//如果不显示声明，则自动将return的值包装为Promise1的泛型
export async function jie_cheng(endNumber: number): Promise<number> {
    let result: number = 1;
    let flag: number = 1;
    while (flag <= endNumber) {
        result = result * flag++;//先使用，再自增
    }
    return result;
}