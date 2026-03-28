//Pamela Sprock 03-28-2026
"use strict";

//Prompt User for Password
let password = prompt("Enter the secret password");

//Check Password Criteria
if (password.length >= 8 && 
	password.match(/[A-Z]/) &&
	password.match(/[a-z]/) &&
	password.match(/\d/)) {
	alert("Congratulations! The secret message is 'You did it!'");
}
else {
	alert("Access denied.");
}
