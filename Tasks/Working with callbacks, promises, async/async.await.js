function makeRequest(location){
    return new Promise(function(resolve, reject){
        if (location === 'Sofia'){
            resolve('You are in the correct place')
        }
        else{
            reject('You are not in the correct place. Go to Sofia.')
        }
    });
}
    

async function travel(){
    try {
        const response = await makeRequest('Sofia')      // now the output is 'You are in Sofia.' If we type Plovdiv insted of Sofia the output will be "You are not in the correct place. Go to Sofia."
        console.log('You are in Sofia');
        
    } catch (error) {
        console.log(error);
    }
}



travel();                           