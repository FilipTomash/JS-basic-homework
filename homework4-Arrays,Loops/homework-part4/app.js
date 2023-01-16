let counter = 1;
let numberString = [];
while (counter <= 20) {
    if (counter % 2 !== 0) {
        numberString += `${counter}` + " ,";
        counter++;
    }
    if (counter % 2 === 0) {
        numberString += `${counter},\n`;
        counter++;
    }
}
console.log(numberString);