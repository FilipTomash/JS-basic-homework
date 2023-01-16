let numbersArray = [2, 6, 7, 11, 20, 22, 58, 78, 91];
let sumOfNumbers = 0;
let myContainer = document.querySelector(".myDiv");

myContainer.innerHTML = "";

for (const number of numbersArray) {
    myContainer.innerHTML += `<li>
    Start : ${sumOfNumbers}
    </li>`;
    myContainer.innerHTML += `<li>
    Addend: ${number}
    </li>`;
    myContainer.innerHTML += `<li>
    Math opp : ${sumOfNumbers} + ${number}
    </li>`;
    sumOfNumbers += number;
    myContainer.innerHTML += `<li>
    Sum : ${sumOfNumbers}
    </li>
    <br>`;
}
myContainer.innerHTML += `<h3>Sum: ${sumOfNumbers}<h3>`;