
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

multipleNumbers(10, 0, 3)
    .then(function (result) {
        console.log('Result:', result);
    })
    .catch(function (error) { 
        console.error('Error:', error.message);
    });