//Pamela Sprock 03-28-2026
"use strict";

//Prompt User for favorite month
let favMonth = prompt("What is your favorite month?");

//Use a switch statement to check the month
switch(favMonth.trim().toLowerCase()) {
    case "march":
    case "april":
    case "may":
        alert("Spring is nice with everything blooming.");
        break;

    case "june":
    case "july":
    case "august":
        alert("You enjoy the summer months!");
        break;
    
    case "september":
    case "october":
    case "november":
        alert("Fall is fun with all the pretty colors.");
        break;
    
    case "december":
    case "january":
    case "february":
        alert("You love the winter months!");
}