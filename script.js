/*let animal = {};
animal.name = 'Leo';
animal.energy = '10';

animal.eat = function (amount) {
    console.log('$(this.name) is eating.');
    this.energy += amount;
}

animal.sleep = function (length) {
    console.log('$(this.name) is sleeping.');
    this.energy += length;
}

animal.play = function (length) {
    console.log('$(this.name) is playing.');
    this.energy -= length;
}

console.log(animal);

let human = {};
human.iq = undefined;
human.__proto__ = animal;*/




let plteam1 = {
    team : "Arsenal",
    position : 1 ,
    match() {
      console.log(`${this.name} is at ${this.year}st place right now.`);
    }
};
  
let plteam2 = {
    team : "Manchester City",
    position : 2,
    
};

plteam2.match = plteam1.match;
plteam2.match();