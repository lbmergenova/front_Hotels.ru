function mySlice(arr, start = 0, end = arr.length) {
    let newarr = [];
    start =  Math.trunc(Number(start))
    end =  Math.trunc(Number(end))
    if (start < 0) {
        start = arr.length + start;
    }
    if (end < 0) {
        end = arr.length + end;
    }
    if (end > arr.length) {
        end = arr.length;
    }
    if (start < 0) {
        start = 0;
    }
    for (let i = start; i < end; i++) {
        newarr.push(arr[i]);
    }
    return newarr;
}

function myIndexOf(arr, item, from = 0) {
    from = Math.trunc(Number(from));
    if (from < 0) {
        from = arr.length + from;
    }
    if (from < 0 || sameValueZero(from, NaN)) {
        from = 0;
    }
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

function myIncludes(arr, item, from = 0) {
    from = Math.trunc(Number(from));
    if (from < 0) {
        from = arr.length + from;
    }
    if (from < 0 || sameValueZero(from, NaN)) {
        from = 0;
    }
    for (let i = from; i < arr.length; i++) {
        if (sameValueZero(arr[i], item)) {
            return true;
        }
    }
    return false;
}

function sameValueZero(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        // x и y равны (могут быть -0 и 0) или они оба равны NaN
        return x === y || (x !== x && y !== y);
    }
    return x === y;
}


// ---------------------------------------------
// Тест mySlice

function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

console.log("Тест mySlice")
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(arraysEqual(animals.slice(2), mySlice(animals,2)));
console.log(arraysEqual(animals.slice(2, 4), mySlice(animals,2,4)));
console.log(arraysEqual(animals.slice(1, 5), mySlice(animals,1,5)));
console.log(arraysEqual(animals.slice(-2), mySlice(animals,-2)));
console.log(arraysEqual(animals.slice(2, -1), mySlice(animals,2,-1)));
console.log(arraysEqual(animals.slice(), mySlice(animals)));
console.log(arraysEqual(animals.slice(3,2), mySlice(animals,3,2)));
console.log(arraysEqual(animals.slice(-10), mySlice(animals,-10)));
console.log(arraysEqual(animals.slice(-10, -2), mySlice(animals,-10, -2)));
console.log(arraysEqual(animals.slice(2, "4.5"), mySlice(animals,2, "4.5")));
console.log(arraysEqual(animals.slice(2, "4,5"), mySlice(animals,2, "4,5")));


// console.log(animals.slice(-10, -2));
// console.log(mySlice(animals,-10, -2));

// ---------------------------------------------
// Тест myIndexOf

console.log("Тест myIndexOf")
var array = [2, 5, 9];
console.log(array.indexOf(2) === myIndexOf(array,2));
console.log(array.indexOf(7) === myIndexOf(array,7));
console.log(array.indexOf(9, 2) === myIndexOf(array,9,2));
console.log(array.indexOf(2, -1) === myIndexOf(array,2,-1));
console.log(array.indexOf(2, -3) === myIndexOf(array,2,-3));
console.log(array.indexOf(2, -10) === myIndexOf(array,2,-10));
console.log(array.indexOf(9,"-1.3") === myIndexOf(array,9,"-1.3"));

// console.log(myIndexOf(array,9,-10))
// console.log(array.indexOf(9,-10))


// ---------------------------------------------
// Тест myIncludes

console.log("Тест myIncludes")
const array1 = [1, 2, 3, NaN];

console.log(array1.includes(2) === myIncludes(array1,2));
console.log(array1.includes(NaN) === myIncludes(array1, NaN));
console.log(array1.includes(2, "1,9") === myIncludes(array1, 2, "1,9"))

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat') === myIncludes(pets,'cat'));
console.log(pets.includes('at') === myIncludes(pets,'at'));

// console.log(myIncludes(array1, 2, "1.9"))
// console.log(array1.includes(2, "1.9"))
// console.log(myIncludes(array1, 2, "1,9"))
// console.log(array1.includes(2, "1,9"))