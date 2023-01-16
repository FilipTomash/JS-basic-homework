let recipeName = prompt("What is the recipe for today?");
let ingridientsNeeded = prompt("How many ingridients are needed?");
let convertedIngredients = Number(ingridientsNeeded);
let listOfIngridinets = [];

for (i = 0; i < convertedIngredients; i++) {
    let ingridinets = prompt("Which ingridients are needed?");
    listOfIngridinets.push(ingridinets);
}

let myDiv = document.querySelector("#myDiv");
let myList = document.getElementById("myList")

myDiv.innerHTML = `<h4>Today we are making:</h4>
<h3>${recipeName}!</h3>
<p>Ingredients:</p>`;
for (const ingridient of listOfIngridinets) {
    myList.innerHTML += `
    <li> ${ingridient}</li>`;
}