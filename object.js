function sumNumericObjectProperties(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            sum += obj[key];
        }
    }
    return sum;
}

function namesNumericObjectProperties(obj) {
    let arrPropVal = [];
    for (const key in obj) {
        if (typeof obj[key] == 'number') {
            arrPropVal.push({key, val:[obj[key]]});
        }
    }
    arrPropVal.sort((a, b) => a.val - b.val)
    let nameProperties = [];
    for (const element of arrPropVal) {
        nameProperties.push(element.key);
    }
    return nameProperties
}

var obj = {name: 'Vasya', friends: 5, likes: 19, projects: 7, rating: 4.7}

console.log(sumNumericObjectProperties(obj))
console.log(namesNumericObjectProperties(obj))