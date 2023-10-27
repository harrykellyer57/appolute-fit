/* complex_program.js */

// This code is a complex program that simulates a virtual ecosystem with multiple organisms and their interactions.

// Class representing an organism in the ecosystem
class Organism {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  // Method to simulate the organism's growth
  grow() {
    this.age++;
    console.log(this.name + " is growing. Current age: " + this.age);
  }

  // Method to simulate the organism's reproduction
  reproduce() {
    console.log(this.name + " is reproducing!");
    // Logic for reproduction
  }

  // Method to simulate the organism's feeding behavior
  feed() {
    console.log(this.name + " is feeding!");
    // Logic for feeding
  }

  // Method to simulate the organism's death
  die() {
    console.log(this.name + " is dying!");
    // Logic for death
  }
}

// Class representing a plant organism
class Plant extends Organism {
  constructor(name, age, species) {
    super(name, age, species);
    this.height = 0;
  }

  grow() {
    super.grow();
    console.log(this.name + " is growing taller. Current height: " + this.height);
    this.height += 10;
  }

  // Method specific to plants
  photosynthesis() {
    console.log(this.name + " is performing photosynthesis!");
    // Logic for photosynthesis
  }
}

// Class representing an animal organism
class Animal extends Organism {
  constructor(name, age, species) {
    super(name, age, species);
    this.energy = 100;
  }

  // Method specific to animals
  move() {
    console.log(this.name + " is moving!");
    // Logic for movement
    this.energy -= 10;
  }

  // Method specific to animals
  sleep() {
    console.log(this.name + " is sleeping!");
    // Logic for sleep
    this.energy += 20;
  }
}

// Creating instances of organisms in the ecosystem
const rose = new Plant("Rose", 1, "Plantae");
const lion = new Animal("Lion", 5, "Panthera leo");
const rabbit = new Animal("Rabbit", 2, "Oryctolagus cuniculus");

// Simulating the ecosystem interactions
rose.grow();
rose.photosynthesis();
lion.grow();
lion.move();
rabbit.grow();
rabbit.move();
lion.sleep();
lion.reproduce();
rose.reproduce();
rabbit.feed();
rabbit.die();
lion.die();
rose.die();