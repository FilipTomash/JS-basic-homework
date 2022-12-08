const phoneQty = 30;
const phoneCost = 119.95;
// const taxCost = 5.9975;
const taxProcentage = 5;

const convertedPhoneQty = parseFloat(phoneQty);
const convertedPhoneCost = parseFloat(phoneCost);
const convertedTaxCost = parseFloat(taxProcentage);

const calculatedTax = convertedTaxCost / 100 * phoneCost;

const phonesTotalCost = convertedPhoneCost + calculatedTax;

const totalCost = phonesTotalCost * convertedPhoneQty;

console.log("The cost of the 30 phones is", totalCost)
