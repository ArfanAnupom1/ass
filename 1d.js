function monthlySavings(inCome, livingCost) {
    if (!Array.isArray(inCome) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    let totalIncome = 0;
    let Tax = 0;
    for (let money = 0; money < inCome.length; money++) {
        totalIncome += inCome[money];
        if (inCome[money] >= 3000) {
            Tax += inCome[money] * 0.20;
        }
    }
    const netIncome = totalIncome - Tax;
    const savings = netIncome - livingCost;
    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}
console.log(monthlySavings([4000, 5000, 6000], 3500)); // Output: 5100 (Total Savings)
console.log(monthlySavings([1000, 500, 1500], 3500)); // Output: "earn more"
console.log(monthlySavings([2000, 3000, 4000], "3500")); // Output: "invalid input"
console.log(monthlySavings("not an array", 3500));