let numbers = [5, 3, 8, 1, 2];

function addNumber(array, number) {
    array.push(number);
    console.log(`After adding ${number}: [${array}]`);
}

function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log(`Number ${number} not found in the array.`);
    }
    console.log(`After removing ${number}: [${array}]`);
}

function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

function calculateAverage(array) {
    const sum = calculateSum(array);
    return sum / array.length;
}

console.log(`Initial array: [${numbers}]`);


addNumber(numbers, 4);

removeNumber(numbers, 3);

const sortedNumbers = sortNumbers(numbers);
console.log(`Sorted array: [${sortedNumbers}]`);

const sum = calculateSum(numbers);
console.log(`Sum of numbers: ${sum}`);

const average = calculateAverage(numbers);
console.log(`Average of numbers: ${average}`);
