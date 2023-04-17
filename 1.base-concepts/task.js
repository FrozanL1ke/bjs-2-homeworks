"use strict"
function solveEquation(a, b, c) {


    let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return [];
  } else if (d === 0) {
    let x = -b / (2 * a);
    return [x];
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentNumber = Number(percent);
  let contributionNumber = Number(contribution);
  let amountNumber = Number(amount);
  let countMonthsNumber = Number(countMonths);

  if (isNaN(percentNumber) || isNaN(contributionNumber) || isNaN(amountNumber) || isNaN(countMonthsNumber)) {
    return false;
  }

  let monthlyPercent = percentNumber / 100 / 12;
  let creditBody = amountNumber - contributionNumber;
  let monthlyPayment = creditBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonthsNumber - 1));
  let totalAmount = monthlyPayment * countMonthsNumber;

  return parseFloat(totalAmount.toFixed(2));
}
