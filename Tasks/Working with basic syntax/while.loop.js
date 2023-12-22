
function guessPin(){

    let pin = 1909;
    let attempts = 4;
     
    while(attempts > 0){
        let guess = parseInt(prompt("Please make your guess."));
    
        if(guess === pin){
            console.log('The pin is correc!')
            break;
        }
        else{
            attempts --;
            if (attempts >= 1){
                console.log(`The guess is not correct. You have ${attempts} attempts left`)
            }
            else{
                console.log('You couldnt guess the pin. You are out of attempts.')
            }
         }
        }
}

guessPin();


    

    




    

