function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    } else if (Array.isArray(name)) {
        return "invalid";
    }

    const lastWords = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastWord = name.slice(-1).toLowerCase(); // Extract last character and convert to lowercase
    if (lastWords.includes(lastWord)) {
        return "Bad Name";
    } else {
        return "Good Name";
    }
}

console.log(checkName("pretom")); // Bad Name
console.log(checkName(["Rashed"])); // invalid
console.log(checkName(123)); // invalid