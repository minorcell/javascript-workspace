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