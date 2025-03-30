/**
 * @author: mCell
 * @description: 每秒打印一个数字的多种方法实现
 */

/**
 * 使用 setTimeout 打印1到10
 */
function printNumberWithTimeout() {
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}

/**
 * 使用 setInterval 打印1到10
 */
function printNumberWithInterval() {
    let i = 1;
    const intervalId = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(intervalId);
        }
    }, 1000);
}

/**
 * 使用递归函数打印1到10
 */
function printNumberWithRecursion(i = 1) {
    if (i > 10) return;
    console.log(i);
    setTimeout(() => {
        printNumberWithRecursion(i + 1);
    }, 1000);
}

/**
 * 使用 Promise 和 async/await 打印1到10
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printNumberWithPromise() {
    for (let i = 1; i <= 10; i++) {
        await sleep(1000);
        console.log(i);
    }
}

/**
 * 使用生成器函数打印1到10,
 * @description: 生成器函数返回一个迭代器对象，使用 for...of 循环遍历迭代器对象时，每次调用 next() 方法都会执行到下一个 yield 表达式，
 * 并返回一个对象，该对象包含两个属性：value 和 done。value 属性是 yield 表达式的值，done 属性是一个布尔值，表示迭代器是否已经完成。
 */
function* numberGenerator() {
    for (let i = 1; i <= 10; i++) {
        yield new Promise(resolve => setTimeout(() => {
            console.log(i);
            resolve();
        }, 1000));
    }
}

async function printNumberWithGenerator() {
    const generator = numberGenerator();
    for (const promise of generator) {
        await promise;
    }
}


/**
 * Array.Reduce 实现
 * @description: 使用 reduce 方法将数组中的每个数字转换为一个 Promise，并在每个 Promise 完成后打印数字
 */
function printWithReduce() {
    Array.from({ length: 10 }, (_, i) => i + 1)
        .reduce((promise, num) =>
            promise.then(() =>
                new Promise(resolve =>
                    setTimeout(() => {
                        console.log(num);
                        resolve();
                    }, 1000)
                )
            ),
            Promise.resolve()
        );
}
