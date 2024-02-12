function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    }
    const income = ticketSale * 120;
    const otherCost = 500 + (8 * 50);
    const save = income - otherCost;
    return save;
}
function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    } else if (Array.isArray(name)) {
        return "invalid";
    }
    const lastWords = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastWord = name.slice(-1).toLowerCase();
    if (lastWords.includes(lastWord)) {
        return "Bad Name";
    } else {
        return "Good Name";
    }
}
function deleteInvalids(numbers) {
    if (!Array.isArray(numbers)) {
        return 'Invalid Array';
    }
    const newArray = [];
    for (let items = 0; items < numbers.length; items++) {
        if (typeof numbers[items] === 'number' && !isNaN(numbers[items])) {
            newArray.push(numbers[items]);
        }
    }
    return newArray;
}
function password(name, birthYear, siteName) {
    if (!name || !birthYear || !siteName) {
        return "invalid";
    } else if (typeof name !== "string" || typeof birthYear !== "number" ||
        typeof siteName !== "string") {
        return "invalid";
    } else if (birthYear < 1000 || birthYear >= 10000) {
        return "invalid";
    }
    const capitalizedSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    return capitalizedSiteName + '#' + name + '@' + birthYear;
}
function monthlySavings(inCome, livingCost) {
    if (!Array.isArray(inCome) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    let totalIncome = 0;
    let Tax = 0;
    for (let i = 0; i < inCome.length; i++) {
        totalIncome += inCome[i];
        if (inCome[i] >= 3000) {
            Tax += inCome[i] * 0.20;
        }
    }
    const totalInCome = totalIncome - Tax;
    const savings = totalInCome - livingCost;
    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}