function dogAgeCalculator(yearsTheDogHas) {
    if (
        Number.isNaN(yearsTheDogHas) ||
        typeof yearsTheDogHas !== "number" ||
        yearsTheDogHas === 0
    ) {
        return "Invalid input!";
    }
    let ageInHumanYears = yearsTheDogHas * 7;
    return ageInHumanYears;
}

console.log (dogAgeCalculator(12));