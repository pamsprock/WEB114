//Pamela Sprock 03-05-2026
"use strict";

//Welcome message
alert("Welcome to the Adventure Realm!  Let's create your hero!");

//Ask the character name
const characterName = prompt("What is your character's name?");

//Ask for the character's pet/companion
const pet = prompt(`What kind of pet does ${characterName} have? 
(dragon, wolf, robot, unicorn, phoenix, etc.)`);

//Ask for the character's superpower
const superpower = prompt(`What is ${characterName}'s special superpower?`);

//Confirm if character ikes fighting monsters
const likesFighting = confirm(`Does ${characterName} like fighting monsters? 
    
Click OK for YES 
Click Cancel for NO`);

//Loading/preparing message
alert(`Gathering magic for ${characterName}....almost ready!`);

//Final character story
alert(`====================================
Name: ${characterName}
Pet: ${pet}
Superpower: ${superpower}
Monster fighter: ${likesFighting ? "Yes" : "No"}
In a faraway land, ${characterName} rides a mighty ${pet}
wielding the incredible power of ${superpower}!
The realm awaits your legend....
====================================`);