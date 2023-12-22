                                                                                 // We use try catch finnaly, to catch errors that may accure in our code or if we want to put some error message in our program. 
                                                                                  
function devideNumbers(a, b){

try {                                                                             // With Try we execute the code. 
    if(b === 0 ){
        throw new Error("You can't devide a number to zero!")
    }
    const result = a / b;
    console.log(`Result: ${result}`);
} 

catch (error) {                                                                   // With catch we are catching the error that occures  
    console.log(`Error: ${error.message}`)
}

finally{                                                                            // The block finally runs everytime. It doesn't matter if we catch an error or not.
    if(b === 0){
        console.log('Try again with different number!');
    }
    else{
        console.log('Great job. Yo have devided the numbers!');
    }
}

}

devideNumbers();