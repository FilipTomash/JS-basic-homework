const firstNamesArray = ["Bob", "Jill", "Stanley", "Jack", "Margaret"];
const lastNamesArray = ["Gregory", "Wurtz", "Cooper", "Reacher", "Jones"];

function joiningNames(nameArray, lastNameArray) {
    if(nameArray.length != lastNameArray.length){
        return "Array lengths not matching!";
    }
    let fullNames = [];
    for (i = 0; i < nameArray.length; i++) {
        fullNames.push(`${(i+1)}. ${nameArray[i]} ${lastNameArray[i]}`);
    }
    return fullNames;
}

const personArray = joiningNames(firstNamesArray,lastNamesArray);
console.log(personArray);