                                // We use for in loop to iterate throgh the keys of an object.
 let car = {
    name: 'Audi',
    type: 's8',
    color: 'black',
    year: '2020'
 }

 function showCarProperties(){
    for(properties in car){
        console.log(properties)
    }
 }
 

 function showCarPropertiesAndTheirValues(){
    delete car.year;
    car.engine = 'Petrol';
    car.color = 'Blue';
    for(properties in car){
        console.log(`${properties}: ${car[properties]}`)
    }

 }

 showCarProperties();
 showCarPropertiesAndTheirValues();