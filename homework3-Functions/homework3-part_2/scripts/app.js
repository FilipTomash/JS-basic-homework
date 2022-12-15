function dogAgeCalculator(convertionType, yearsInput) {
    if (
        Number.isNaN(yearsInput) ||
        typeof yearsInput !== "number" ||
        yearsInput === 0
    ) {
        return "Invalid input!";
    }
    if (
        convertionType !== "h2d" && convertionType !== "d2h"
    ) {
        return "Invalid input!";
    }
    if (convertionType === "d2h") {
        let ageInHumanYears = yearsInput * 7;
        return ageInHumanYears;
    }

    let ageInDogYears = yearsInput / 7;
    return ageInDogYears;
}

console.log(dogAgeCalculator("d2h", 10));