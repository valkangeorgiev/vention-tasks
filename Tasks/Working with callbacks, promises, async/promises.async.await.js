function multipleNumbers(a, b, c) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (b === 0 || a === 0 || c === 0) {
                reject(new Error("Sorry, you can't multiply by 0."));
            } else {
                resolve(a * b * c);
            }
        }, 1000);
    });
}

async function calculateResult() {
    try {
        const result = await multipleNumbers(10, 3, 3);
        console.log('Result:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}


calculateResult();