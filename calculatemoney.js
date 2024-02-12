function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    }

    const income = ticketSale * 120;
    const otherCost = 500 + (8 * 50);
    const save = income - otherCost;
    return save;
}

console.log(calculateMoney(1055));
console.log(calculateMoney(-130));