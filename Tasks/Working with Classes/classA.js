
class Animals{
      constructor(name){
         this.name = name;     
      }
      run(){
         console.log(`The animal with the name ${this.name} is running!`);
      }
      sleep(){
         console.log(`The animal with the name ${this.name} is sleeping!`);
      }  
}

const animal = new Animals('Johny');
animal.run();
animal.sleep();

module.exports = Animals;

