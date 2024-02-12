// function password(obj) {
//     // Check if object has required properties and they are of correct types
//     if (!obj.name || !obj.birthYear || !obj.siteName) {
//         return "invalid";
//     } else if (typeof obj.name !== "string" || typeof obj.birthYear !== "number" ||
//         typeof obj.siteName !== "string") {
//         return "invalid";
//     } else if (obj.birthYear < 1000 || obj.birthYear >= 10000) {
//         return "invalid";
//     }
//     return obj.siteName + '#' + obj.name + '@' + obj.birthYear;
// }

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


console.log(password("kolimuddin", 2010, "google"));


