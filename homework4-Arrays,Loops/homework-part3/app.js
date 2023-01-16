const arrayOfText = ['Hello', 'there', 'students', 'of', 'SEDC'];
let emptyArray = "";

function sumOfArrayElements(arrayExample) {
    for (const item of arrayExample) {
        emptyArray += item + ' ';
    }
    return emptyArray;
}

console.log(sumOfArrayElements(arrayOfText));