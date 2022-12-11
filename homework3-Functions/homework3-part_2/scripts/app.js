function dogAgeCalculator(yearsTheDogHas) {
    if (
        Number.isNaN(yearsTheDogHas) ||
        typeof yearsTheDogHas !== "number" ||
        yearsTheDogHas === 0
    ) {
        return console.log("Invalid input!");
    }
    let ageInHumanYears = yearsTheDogHas * 7;
    return console.log (ageInHumanYears);
}

dogAgeCalculator(1);