const Dog = require('./classB')

class Cat extends Dog{

    constructor( name, breed, color ){
        super (name, breed);
        this.color = color;
     }
     meow(){  
        console.log(`The ${this.breed} cat with name: ${this.name} and color ${this.color} is meowing`);   
     }
     bite(){  
        console.log(`The ${this.breed} cat with name: ${this.name} and color ${this.color} is biting`);   
     }  
}

const cat = new Cat ('Merry','Bengal', 'organge' );

cat.run()      // from Class A
cat.sleep();   // from Class A
cat.eat();     // from Class B
cat.jump();    // From Class B
cat.meow();
cat.bite();


