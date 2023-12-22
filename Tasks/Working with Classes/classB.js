const Animal = require('./classA')

class Dog extends Animal{

    constructor(name, breed ){
        super (name);
        this.breed = breed;
     }
     eat(){
        console.log(`The ${this.breed} with name: ${this.name} is eating.`);
     }
     jump(){
      console.log(`The ${this.breed} with name: ${this.name} is jumping.`);
     }
}

const dog = new Dog('Sharo', 'Doberman');
dog.run();  //from class A
dog.sleep()  //from class A
dog.eat();
dog.jump();


module.exports = Dog;





