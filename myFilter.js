function myFilter(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }   
    }
    return newArray;
}

const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, function(num) { // Не стрелочная функция, для примера
  return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = myFilter(numbers, function(num) { // Не стрелочная функция, для примера
  return num > 3;
});
console.log(greaterThanThree); // [4, 5]

// Фильтруем числа меньше 3
const lessThanThree = myFilter(numbers, num => num < 3);
console.log(lessThanThree); // [1, 2]

// Фильтруем четные позиции массива
const evenPosition = myFilter(numbers, (_, index) => index%2);
console.log(evenPosition); // [1, 2]