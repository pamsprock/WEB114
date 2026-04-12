//Pamela Sprock 04-12-2026
"use strict";

//Declare Global variables
let count = 0;
let totalGas = 0;

// Prompt user for their name
let username = prompt("Please enter your name.");

//Validate user data entered
if (username === null) {
    alert("You cancelled the name prompt.");
}

username = username.trim();

if (username === "") {
    alert("You must type a name.");
}

//Call function
let average = calcGasAvg();

//Validate user data entered and display calculations
if (average === null) {
    alert("You cancelled entering gas totals.");
}
if (count === 0) {
    alert ("No gas totals were entered.");
}
else if (count === 1) {
    alert(`${username}'s gas total is $${totalGas.toFixed(2)}`);
}
else {
    let message = `${username}'s average weekly gas bill is $${average}`;
    alert(message);
}

//Validate user data entered and display counts
if (count === 0) {
    alert ("No gas totals were entered.")
}
else if (count === 1) {
    alert("You entered 1 gas entry.");
}
else {
    alert(`You entered ${count} gas totals.`);
}

// Create function
function calcGasAvg() {
    let gas = prompt("Enter your next week's gas total. Enter -1 when you are done.");

    if (gas === null) {
        return null;
    }
    
    gas = parseFloat(gas);

    while (gas !== -1) {
        if (isNaN(gas)) {
           gas = parseFloat(prompt("Enter your next week's gas total. Enter -1 when you are done."));
         }
         else {
            totalGas = totalGas + gas;
            count++;
            gas = prompt("Enter your next week's gas total. Enter -1 when you are done.");
            if (gas === null) {
                return null;
            }

            gas = parseFloat(gas);
         }
    }
    if (count > 0) {
        return totalGas / count;
    }
    else {
        return 0;
    }
}    


