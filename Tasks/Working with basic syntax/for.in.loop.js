                                // We use for in loop to iterate throgh the keys of an object.
 let car = {
    name: 'Audi',
    type: 's8',
    color: 'black',
    year: '2020'
 }

 function GetCarProperties(){
    for(properties in car){
        console.log(properties)
    }
 }
 

 function GetCarPropertiesAndTheirValues(){
    delete car.year;
    car.engine = 'Petrol';
    car.color = 'Blue';
    for(properties in car){
        console.log(`${properties}: ${car[properties]}`)
    }

 }

 GetCarProperties();
 GetCarPropertiesAndTheirValues();