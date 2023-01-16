let firstHeader = document.getElementById("myTitle");
let lastDiv = document.querySelector(".anotherDiv").nextElementSibling;;
let secondHeader = lastDiv.firstElementChild;
let thirdHeader = lastDiv.lastElementChild;
let firstParagraph = document.querySelector(".paragraph");
let secondParagraph = document.querySelector(".anotherDiv").firstElementChild;

firstHeader.innerHTML = "Changing titles is fun!";
secondHeader.innerText = "This is changed also";
thirdHeader.innerText += "It sure will!";
firstParagraph.innerHTML = "";
firstParagraph.innerHTML = "Woo hoo this is very cool!";
secondParagraph.innerText = "This is the last change... Just joking!"

console.log(firstHeader);
console.log(firstParagraph);
console.log(secondParagraph);
console.log(secondHeader);
console.log(thirdHeader);