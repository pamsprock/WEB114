/*Pamela Sprock 05-05-2026
I am not a very creative person so I picked a project suggestion
from the list.  The image gallery caught my eye so I decided
to make a pet introduction page.  It was fun experimenting with 
adding the image attributes to the java script instead of the html
*/
"use strict";

//Connect to elements
let winniebtn = document.querySelector("#winnie-button");
let johnabtn = document.querySelector("#johna-button");
let picklesbtn = document.querySelector("#pickles-button");
let jakebtn = document.querySelector("#jake-button");
let cosmobtn = document.querySelector("#cosmo-button");
const petphoto = document.querySelector("#pet-photo");
let counterw = 0;
let counterj = 0;
let counterp = 0;
let countery = 0;
let countero = 0;

//winnie function
function winnie() {
    petphoto.src = "images/Winnie.jpg";
    petphoto.alt = "bulldog photo";
    petphoto.title = "Photo of a bulldog";
    console.log("Photo Displayed");
    counterw = counterw + 1;
    
    if (counterw > 3) {
        alert("Winnie is tired!")
        alert("Please click on a different pet.");
    }
    else {
    document.body.style.backgroundColor = "#ffffe6";
    }

    checktired();
}

//johna function
function johna() {
	petphoto.src = "images/Johna.jpg";
    petphoto.alt = "staffordshire bull terrior photo";
    petphoto.title = "Photo of a staffordshire bull terrior";
    console.log("Photo Displayed");
    counterj = counterj + 1;

    if (counterj > 3) {
        alert("Johna is tired!");
        alert("Please click on a different pet.");
    }
    else {
    document.body.style.backgroundColor = "#e6ffff";
    }

    checktired();
}

//pickles function
function pickles() {
    petphoto.src = "images/Pickles.jpg";
    petphoto.alt = "black mouth cur photo";
    petphoto.title = "Photo of a black mouth cur";
    console.log("Photo Displayed");
    counterp = counterp + 1;

    if (counterp > 3) {
        alert("Pickles is tired!");
        alert("Please click on a different pet.");
    }
    else {
    document.body.style.backgroundColor = "#e6ffe6";
    }

    checktired();
}

//jake function
function jake() {
    petphoto.src = "images/Jake.jpg";
    petphoto.alt = "persian cat photo";
    petphoto.title = "Photo of a persian cat";
    console.log("Photo Displayed");
    countery = countery + 1;

    if (countery > 3) {
        alert("Jake is tired!");
        alert("Please click on a different pet.");
    }
    else {
    document.body.style.backgroundColor = "#fff2e6";
    }

    checktired();
}

//cosmo function
function cosmo () {
    petphoto.src = "images/Cosmo.jpg";
    petphoto.alt = "orange tabby cat photo";
    petphoto.title = "Photo of an orange tabby cat";
    console.log("Photo Displayed");
    countero = countero + 1;

    if (countero > 3) {
        alert("Cosmo is tired!");
        alert("Please click on a different pet.");
    }
    else {
    document.body.style.backgroundColor = "#ffcccc";
    }

    checktired();
}

//Event Listeners
winniebtn.addEventListener("click", winnie);
johnabtn.addEventListener("click", johna);
picklesbtn.addEventListener("click", pickles);
jakebtn.addEventListener("click", jake);
cosmobtn.addEventListener("click", cosmo);

function checktired() {
    if (counterw > 3 && counterj > 3 && counterp > 3 && countery > 3 && countero > 3) {
        alert("All pets are tired!");
        alert("Please refresh the page.");
    }
}