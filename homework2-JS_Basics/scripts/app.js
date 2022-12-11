alert("Hello, do you want to find out your Chinese zodiac?");

const userInput = Number(prompt("What year were you born?"));

if (Number.isNaN(userInput) || userInput === 0) {
    console.log("Bad input!");
} else if ((userInput - 4) % 12 === 0) {
    console.log("Your Chinese zodiac sign is Rat");
} else if ((userInput - 4) % 12 === 1) {
    console.log("Your Chinese zodiac sign is Ox");
} else if ((userInput - 4) % 12 === 2) {
    console.log("Your Chinese zodiac sign is Tiger");
} else if ((userInput - 4) % 12 === 3) {
    console.log("Your Chinese zodiac sign is Rabbit");
} else if ((userInput - 4) % 12 === 4) {
    console.log("Your Chinese zodiac sign is Dragon");
} else if ((userInput - 4) % 12 === 5) {
    console.log("Your Chinese zodiac sign is Snake");
} else if ((userInput - 4) % 12 === 6) {
    console.log("Your Chinese zodiac sign is Horse");
} else if ((userInput - 4) % 12 === 7) {
    console.log("Your Chinese zodiac sign is Goat");
} else if ((userInput - 4) % 12 === 8) {
    console.log("Your Chinese zodiac sign is Monkey");
} else if ((userInput - 4) % 12 === 9) {
    console.log("Your Chinese zodiac sign is Rooster");
} else if ((userInput - 4) % 12 === 10) {
    console.log("Your Chinese zodiac sign is Dog");
} else if ((userInput - 4) % 12 === 11) {
    console.log("Your Chinese zodiac sign is Pig");
} else
    console.log("Bad input!");
