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

const newArray = [1, 1, 1, 1, 1, NaN];
console.log(deleteInvalids(newArray));