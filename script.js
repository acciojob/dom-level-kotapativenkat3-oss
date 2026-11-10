//your JS code here. If required.
const element = document.getElementById("level");

let count = 0;
let currentElement = element;

while (currentElement !== null) {
    count++;
    currentElement = currentElement.parentElement;
}

alert("The level of the element is: " + (count - 1));