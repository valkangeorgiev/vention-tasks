const Animals = require('./classA')

class Dog extends Animals{

    constructor(name, breed ){
        super (name);
        this.breed = breed;
     }
     eat(){
        console.log(`The ${this.breed} with name: ${this.name} is eating`);
     }
     jump(){
      console.log(`The ${this.breed} with name: ${this.name} is jumping`);
     }
}

const dog = new Dog('Sharo', 'Pitbull');
dog.run();  //from class A
dog.leep()  //from class A
dog.eat();
dog.jump();


module.exports = Dog;





