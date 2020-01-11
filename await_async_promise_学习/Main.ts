export let a: number = 111;

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

// asyncPrint(1000);
