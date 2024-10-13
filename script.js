function createPet() {
    var name = prompt("What is your pet's name?");
    var type = prompt("What type of pet do you have? (e.g., dog, cat, dragon, parrot)");
    var age = parseInt(prompt("How old is your pet? (in years)"), 10);
    var happiness = parseInt(prompt("How happy is your pet? (0-100)"), 10);
    var hunger = parseInt(prompt("How hungry is your pet? (0-100)"), 10);

 // Create the pet object
 var pet = {
    name: name,
    type: type,
    age: age,
    happiness: happiness,
    hunger: hunger,
   // Method to feed the pet
   feed: function() {
    this.hunger -= 20;
    if (this.hunger < 0) this.hunger = 0;
    alert(`${this.name} has been fed! Hunger is now ${this.hunger}.`);
},

// Method to play with the pet
play: function() {
    this.happiness += 20;
    if (this.happiness > 100) this.happiness = 100;
    alert(`${this.name} played and is now ${this.happiness} happy!`);
},

// Method to age the pet
agePet: function() {
    this.age += 1;
    this.happiness -= 5;
    this.hunger += 10;
    if (this.happiness < 0) this.happiness = 0;
    alert(`${this.name} is now ${this.age} years old! Happiness: ${this.happiness}, Hunger: ${this.hunger}`);
}
};

return pet;
}