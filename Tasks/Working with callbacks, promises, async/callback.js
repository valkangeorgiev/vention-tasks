function firstFunction(){
        console.log("First task has finished.");  
}; 
    
function secondFunction(callback){
    setTimeout(function(){
        console.log("Second task has finished.");
        callback()
    }, 2000);     
}
function thirdFunction(){
    console.log("Third task has finished")
}

thirdFunction();                      // firstable we will execute the third task
secondFunction(firstFunction);       // after that we will execute the second task,
                                    // no matter that we need to wait 2 seconds and first task will be finished
                                    // last. This is what callback method does. 
                                    // we call first task to be executed after the second task, no metter how long
                                    // it will wait. We use callback method often with data bases, files, or in
                                    // automation QA, we use it to wait for some element to be visible.


