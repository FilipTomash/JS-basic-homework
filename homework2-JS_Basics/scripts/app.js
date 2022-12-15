alert("Hello, do you want to find out your Chinese zodiac?");

const userInput = Number(prompt("What year were you born?"));
const chineseZodiacCalculation = (userInput - 4) % 12;

// if (Number.isNaN(userInput) || userInput === 0) {
//     console.log("Bad input!");
// } else if (chineseZodiacCalculation === 0) {
//     console.log("Your Chinese zodiac sign is Rat");
// } else if (chineseZodiacCalculation === 1) {
//     console.log("Your Chinese zodiac sign is Ox");
// } else if (chineseZodiacCalculation === 2) {
//     console.log("Your Chinese zodiac sign is Tiger");
// } else if (chineseZodiacCalculation === 3) {
//     console.log("Your Chinese zodiac sign is Rabbit");
// } else if (chineseZodiacCalculation === 4) {
//     console.log("Your Chinese zodiac sign is Dragon");
// } else if (chineseZodiacCalculation === 5) {
//     console.log("Your Chinese zodiac sign is Snake");
// } else if (chineseZodiacCalculation === 6) {
//     console.log("Your Chinese zodiac sign is Horse");
// } else if (chineseZodiacCalculation === 7) {
//     console.log("Your Chinese zodiac sign is Goat");
// } else if (chineseZodiacCalculation === 8) {
//     console.log("Your Chinese zodiac sign is Monkey");
// } else if (chineseZodiacCalculation === 9) {
//     console.log("Your Chinese zodiac sign is Rooster");
// } else if (chineseZodiacCalculation === 10) {
//     console.log("Your Chinese zodiac sign is Dog");
// } else if (chineseZodiacCalculation === 11) {
//     console.log("Your Chinese zodiac sign is Pig");
// } else
//     console.log("Bad input!");


//SWITCH

switch (chineseZodiacCalculation) {
    case 0:
        console.log("Your Chinese zodiac sign is Rat");
        break;
    case 1:
        console.log("Your Chinese zodiac sign is Ox");
        break;
    case 2:
        console.log("Your Chinese zodiac sign is Tiger");
        break;
    case 3:
        console.log("Your Chinese zodiac sign is Rabbit");
        break;
    case 4:
        console.log("Your Chinese zodiac sign is Dragon");
        break;
    case 5:
        console.log("Your Chinese zodiac sign is Snake");
        break;
    case 6:
        console.log("Your Chinese zodiac sign is Horse");
        break;
    case 7:
        console.log("Your Chinese zodiac sign is Goat");
        break;
    case 8:
        console.log("Your Chinese zodiac sign is Monkey");
        break;
    case 9:
        console.log("Your Chinese zodiac sign is Rooster");
        break;
    case 10:
        console.log("Your Chinese zodiac sign is Dog");
        break;
    case 11:
        console.log("Your Chinese zodiac sign is Pig");
        break;
    default:
        console.log("Invalid input!")
}