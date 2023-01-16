const mixedArray = [2, 3, 5, 7, "Max", 22, 11, 35, "Sara", 1, 58, NaN];
let minNumber = mixedArray[0];
let maxNumber = mixedArray[0];


function sumOfMinandMax(array) {
    for (let number of array) {
        if (!validateNumber(number)) {
            continue;
        }
        if (minNumber > number) {
            minNumber = number;
        }
        else if (maxNumber < number) {
            maxNumber = number;
        }
    }
    let sumOfNumbers = [minNumber + maxNumber];
    return console.log(`Min: ${minNumber}, Max:${maxNumber}, Sum: ${sumOfNumbers}`);
}

function validateNumber(number) {
    if (typeof number !== "number" || typeof number === NaN) {
        return false;
    }
    return true;
}

sumOfMinandMax(mixedArray);