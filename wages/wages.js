//Pamela Sprock 03-16-2026
"use strict";

//Prompt the user for their wage
let hourlyWage = prompt("What is your hourly wage?");
hourlyWage = parseInt(hourlyWage);

//Prompt the user for their hours worked
let hoursWorked = prompt("How many hours did you work this week?");
hoursWorked = hoursWorked.trim();
hoursWorked = parseInt(hoursWorked);

//Calculate the total weekly earnings
let grossPay = hourlyWage * hoursWorked;

//Calculate the tax amount
let taxes = grossPay * .10;

//Calculate net pay
let netPay = grossPay - taxes;

//Display the weekly earning amount
console.log("$" + netPay.toFixed(2));

if (hoursWorked > 40) {
console.log("You worked overtime this week!");
}else {
console.log("No overtime this week.");
}

if (netPay > 800) {
console.log("Great paycheck this week!");
} else {
console.log("Keep working toward a bigger paycheck!");
}