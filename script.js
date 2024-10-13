function createPet() {
    var name = prompt("What is your pet's name?");
    var type = prompt("What type of pet do you have? (e.g., dog, cat, dragon, parrot)");
    var age = parseInt(prompt("How old is your pet? (in years)"), 10);
    var happiness = parseInt(prompt("How happy is your pet? (0-100)"), 10);
    var hunger = parseInt(prompt("How hungry is your pet? (0-100)"), 10);
}

 // Create the pet object
 var pet = {
    name: name,
    type: type,
    age: age,
    happiness: happiness,
    hunger: hunger,
 }