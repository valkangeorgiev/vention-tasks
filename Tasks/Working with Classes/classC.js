const Dog = require('./classB')

class PitBull extends Dog{

    constructor( name, breed, color ){
        super (name, breed);
        this.color = color;
     }
     bark(){  
        console.log(`The ${this.breed} dog with name: ${this.name} and color ${this.color} is barking.`);   
     }
     bite(){  
        console.log(`The ${this.breed} dog with name: ${this.name} and color ${this.color} is biting.`);   
     }  
}

const pitbull = new PitBull ('Tom','American Pit Bull Terrier', 'black' );

pitbull.run()      // from Class A
pitbull.sleep();   // from Class A
pitbull.eat();     // from Class B
pitbull.jump();    // From Class B
pitbull.bark();
pitbull.bite();


