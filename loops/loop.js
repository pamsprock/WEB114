//Pamela Sprock 04-01-2026
"use strict";

let handleWithCare = 0;
let loadCrate = 0;
let inspectCrate = 0;

for (let crate = 1; crate <=20; crate++) {
	if (crate % 5 === 0) {
		console.log(`Crate ${crate}: Handle with care`);
		handleWithCare++;
	} else if (crate % 2 === 0) {
		console.log(`Crate ${crate}: Load crate`);
		loadCrate++;
	} else {
		console.log(`Crate ${crate}: Inspect Crate`);
		inspectCrate++;
	}
}

console.log();
console.log(`${handleWithCare} fragile crates`);
console.log(`${loadCrate} load crates`);
console.log(`${inspectCrate} inspect crates`);


